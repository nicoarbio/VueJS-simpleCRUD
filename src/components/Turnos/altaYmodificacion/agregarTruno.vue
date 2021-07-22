<template>
  <q-card>

      <FormHeader>Agregar un nuevo turno</FormHeader>

        <form @submit="submitForm">
          <q-card-section class="q-mx-md">

          <q-select
              standout="bg-primary text-white"
              v-model="turnoNuevo.idPaciente"
              ref="paciente"
              :options= "pacientesId"
              :rules="[val => !!val || 'Campo obligatorio']"
              label="Paciente" />

          <q-select
              standout="bg-primary text-white"
              v-model="turnoNuevo.idMedico"
              ref="medico"
              :options= "medicosId"
              :rules="[val => !!val || 'Campo obligatorio']"
              label="Medico" />

          <FormFecha :fecha.sync="turnoNuevo.fecha" ref="Fecha"></FormFecha>
          <FormHora :hora.sync="turnoNuevo.hora" ref="Hora"></FormHora>

        </q-card-section>

        <q-card-actions align="right" class="  q-mb-sm q-px-md text-primary">
          <q-btn
            color="negative"
            label="Cancelar"
            v-close-popup />
          <q-btn
            color="primary"
            label="Añadir"
            type="submit" />
        </q-card-actions>
        </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import { AGREGARTURNO } from '../../../store/Turnos/types.js'
import FormHeader from '../../Compartido/Formulario/FormHeader.vue'
import FormFecha from '../../Compartido/Formulario/FormFechaTurno.vue'
import FormHora from '../../Compartido/Formulario/FormHora.vue'

export default {
  components: {
    FormHeader,
    FormFecha,
    FormHora
  },
  data () {
    return {
      turnoNuevo: {
        idPaciente: '',
        idMedico: '',
        fecha: '',
        hora: '',
        estado: 'Reservado'
      }
    }
  },
  computed: {
    pacientesId: function () {
      const pacientes = this.$store.getters['Pacientes/getPaciente']
      const listaKey = Object.keys(pacientes)
      return listaKey
    },
    medicosId: function () {
      const medicos = this.$store.getters['Medicos/getMedico']
      const listaKey = Object.keys(medicos)
      return listaKey
    }
  },
  methods: {
    ...mapActions('Turnos', [AGREGARTURNO]),
    submitForm () {
      if (this.$refs.paciente.validate() &&
          this.$refs.medico.validate() &&
          this.$refs.Fecha.$refs.fecha.validate() &&
          this.$refs.Hora.$refs.hora.validate()) {
        this.cargarTurno()
      }
    },
    cargarTurno () {
      this.agregarTurno(this.turnoNuevo)
      this.$emit('cerrar')
    }
  }

}
</script>

<style>

</style>
