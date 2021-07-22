<template>
    <div class="row">
    <q-item
      :class="setBg(turno.estado)"
    >
        <q-item-section
          class="text-info q-ma-sm">
          <q-item-label class="text-h5 ">
              Turno
          </q-item-label>
          <q-item-label class="text-caption text-accent">
            {{id}}
          </q-item-label>
          <q-item-label
            class="text-info text-body1 ">
            paciente: {{turno.idPaciente}} Medico: {{turno.idMedico}}
          </q-item-label>
          <q-item-label
            class="text-info text-body1 ">
            Estado: {{turno.estado}}
          </q-item-label>
        </q-item-section>

        <q-item-section
          class="text-info ">
          <div class="row">
              <q-icon
                name="today"
                class="text-info q-my-sm"
                size = "md" />
            <div class="col q-pl-sm ">
              <q-item-label >
                {{turno.fecha}}
               </q-item-label>
              <q-item-label >
                {{turno.hora}}
               </q-item-label>
            </div>
          </div>
        </q-item-section>

        <q-item-section
          avatar
          class="text-info">

          <q-btn-group>

          <q-btn
           :disable = "turno.estado == 'Cancelado' || turno.estado == 'Finalizado'"
           color="primary"
           glossy
           text-color="white"
           push
           label="Iniciar"
           @click="finalizar(id)" />

          <q-btn-dropdown
            :disable = "turno.estado == 'Cancelado' || turno.estado == 'Finalizado'"
            color="primary"
            glossy icon="settings">
            <q-list>
              <q-item
                clickable
                v-if="turno.estado == 'Reservado'"
                v-close-popup
                @click="cancelar(id)">
                <q-item-section>
                  <q-item-label>Cancelar</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="mostrarEditar = true">
                <q-item-section>
                  <q-item-label>Modificar</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-btn-group>
        </q-item-section>

      </q-item>
      <q-dialog v-model="mostrarEditar" persistent>
            <EditarTurno
              @cerrar="mostrarEditar = false"
              :turno="turno"
              :id="id" />
      </q-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { MODIFICARTURNO, ELINIMARTURNO } from '../../store/Turnos/types.js'
import EditarTurno from '../Turnos/altaYmodificacion/editarTurno.vue'
export default {
  data () {
    return {
      mostrarEditar: false
    }
  },
  components: {
    EditarTurno
  },
  props: ['turno', 'id'],
  methods: {
    ...mapActions('Turnos', [MODIFICARTURNO, ELINIMARTURNO]),
    finalizar (id) {
      this.$q.dialog({
        title: 'Inicar Turno',
        message: 'Comenzar el turno actual?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.modificarTurno({ id: id, updates: { estado: 'Finalizado' } })
      })
    },
    cancelar (id) {
      this.$q.dialog({
        title: 'Cancelar Turno',
        message: 'Estas seguro de cancelar el turno?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.modificarTurno({ id: id, updates: { estado: 'Cancelado' } })
      })
    },
    setBg (estado) {
      switch (estado) {
        case 'Reservado':
          return 'bg-secondary q-ma-md col rounded-borders'

        case 'Finalizado':
          return 'bg-positive q-ma-md col'

        case 'Cancelado':
          return 'bg-negative q-ma-md col'

        default:
          break
      }
    }
  }
}

</script>

<style >

</style>
