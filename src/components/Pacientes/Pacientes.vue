<template>

    <q-card
      class="my-card q-mx-md q-my-sm"
      bordered
    >
      <q-img
        src= 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Paciente</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ paciente.nombre }} {{ paciente.apellido }}</div>
        <div class="text-caption text-red">{{ id }}</div>
        <div class="text-caption text-grey">{{ paciente.fechaNacimiento }}</div>
        <div class="text-caption text-grey">{{ paciente.direccion }}</div>
        <div class="text-caption text-grey">{{ paciente.email }}</div>
      </q-card-section>

        <q-btn
            @click="mostrarEditar = true"
            icon="settings"
            flat
            color="positive"
            label="Modificar" />

        <q-btn
            @click="confirmarBorrar(id)"
            icon="delete"
            flat
            color="negative"
            label="Eliminar" />

          <q-dialog v-model="mostrarEditar" persistent>
            <EditarPaciente
              @cerrar="mostrarEditar = false"
              :paciente="paciente"
              :id="id" />
          </q-dialog>

        <q-space />

    </q-card>

</template>

<script>
import { mapActions } from 'vuex'
import { ELINIMARPACIENTE } from '../../store/Pacientes/types.js'
import EditarPaciente from '../Pacientes/altaYmodificacion/editarPaciente.vue'

export default {
  data () {
    return {
      mostrarEditar: false
    }
  },
  components: {
    EditarPaciente
  },
  props: ['paciente', 'id'],
  methods: {
    ...mapActions('Pacientes', [ELINIMARPACIENTE]),
    confirmarBorrar (id) {
      this.$q.dialog({
        title: 'Eliminar',
        message: 'Estas seguro de eliminar al paciente?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminarPaciente(id)
      })
    }
  }
}

</script>

<style >

</style>
