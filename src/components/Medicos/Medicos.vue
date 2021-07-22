<template>

    <q-card
      class="my-card q-mx-md q-my-sm"
      bordered
    >
      <q-img
        src="https://eunamed.com/wp-content/uploads/2021/02/medico-especialista-en-chile-768x512.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Medico</div>
        <div class="text-overline text-orange-9">{{ medico.especialidad }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ medico.nombre }} {{ medico.apellido }}</div>
        <div class="text-caption text-red">{{ id }}</div>
        <div class="text-caption text-grey">{{ medico.fechaNacimiento }}</div>
        <div class="text-caption text-grey">{{ medico.direccion }}</div>
        <div class="text-caption text-grey">{{ medico.email }}</div>
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
            <EditarMedico
              @cerrar="mostrarEditar = false"
              :medico="medico"
              :id="id" />
          </q-dialog>

        <q-space />

    </q-card>

</template>

<script>
import { mapActions } from 'vuex'
import { ELINIMARMEDICO } from '../../store/Medicos/types.js'
import EditarMedico from '../Medicos/altaYmodificacion/editarMedico.vue'

export default {
  data () {
    return {
      mostrarEditar: false
    }
  },
  components: {
    EditarMedico
  },
  props: ['medico', 'id'],
  methods: {
    ...mapActions('Medicos', [ELINIMARMEDICO]),
    confirmarBorrar (id) {
      this.$q.dialog({
        title: 'Eliminar',
        message: 'Estas seguro de eliminar al medico?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminarMedico(id)
      })
    }
  }
}

</script>

<style >

</style>
