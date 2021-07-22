<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md">
      <q-btn
        @click="mostrarAgregar = true"
        icon="person_add_alt"
        color="primary"
        class=" q-mx-lg on-left"
        label="Agregar Un Nuevo Paciente" />

    </div>

    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <Pacientes
        v-for="(paciente, key) in pacientes"
        :key="key"
        :paciente='paciente'
        :id='key'></Pacientes>
    </div>

    <q-dialog v-model="mostrarAgregar" persistent>
      <AgregarPaciente @cerrar="mostrarAgregar = false" />
    </q-dialog>

  </q-page>
</template>

<script>
import Pacientes from '../components/Pacientes/Pacientes.vue'
import AgregarPaciente from '../components/Pacientes/altaYmodificacion/agregarPaciente.vue'

export default {
  name: 'PagePaciente',
  computed: {
    pacientes: function () {
      return this.$store.getters['Pacientes/getPaciente']
    }
  },
  components: {
    Pacientes,
    AgregarPaciente
  },
  data () {
    return {
      mostrarAgregar: false
    }
  }
}
</script>
