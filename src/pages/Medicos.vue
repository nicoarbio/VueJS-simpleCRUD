<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md">
      <q-btn
        @click="mostrarAgregar = true"
        icon="person_add_alt"
        color="primary"
        class=" q-mx-lg on-left"
        label="Agregar Un Nuevo Medico" />

    </div>

    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <Medicos
        v-for="(medico, key) in medicos"
        :key="key"
        :medico='medico'
        :id='key'></Medicos>
    </div>

    <q-dialog v-model="mostrarAgregar" persistent>
      <AgregarMedico @cerrar="mostrarAgregar = false" />
    </q-dialog>

  </q-page>
</template>

<script>
import Medicos from '../components/Medicos/Medicos.vue'
import AgregarMedico from '../components/Medicos/altaYmodificacion/agregarMedico.vue'

export default {
  name: 'PageMedico',
  computed: {
    medicos: function () {
      return this.$store.getters['Medicos/getMedico']
    }
  },
  components: {
    Medicos,
    AgregarMedico
  },
  data () {
    return {
      mostrarAgregar: false
    }
  }
}
</script>
