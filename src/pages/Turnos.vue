<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md">
      <q-btn
        @click="mostrarAgregar = true"
        icon="note_add"
        color="primary"
        class=" q-mx-lg on-left"
        label="Agregar Un Nuevo Turno" />
    </div>

    <div class="q-ma-lg">
      <q-list >
      <Turnos
        v-for="(turno, key) in turnos"
        :key="key"
        :turno='turno'
        :id='key'></Turnos>
    </q-list>
    </div>
    <q-dialog v-model="mostrarAgregar" persistent>
      <AgregarTurno @cerrar="mostrarAgregar = false" />
    </q-dialog>

  </q-page>
</template>

<script>
// import { mapGetters } from 'vuex'
import Turnos from '../components/Turnos/Turnos.vue'
import AgregarTurno from '../components/Turnos/altaYmodificacion/agregarTruno.vue'

export default {
  name: 'PageTurno',
  computed: {
    // ...mapGetters('Turnos', ['getTurno'])
    turnos: function () {
      return this.$store.getters['Turnos/getTurno']
    }
  },
  components: {
    Turnos,
    AgregarTurno
  },
  data () {
    return {
      mostrarAgregar: false
    }
  }
}
</script>
