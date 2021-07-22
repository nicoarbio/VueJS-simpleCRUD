<template>
  <q-card>

    <FormHeader>Modificar turno</FormHeader>

      <form @submit="submitForm">
        <q-card-section class="q-mx-md">

            <FormFecha :fecha.sync="turnoEditar.fecha" ref="Fecha"></FormFecha>
            <FormHora :hora.sync="turnoEditar.hora" ref="Hora"></FormHora>
        </q-card-section>

        <q-card-actions align="right" class="  q-mb-sm q-px-md text-primary">
          <q-btn
            color="negative"
            label="Cancelar"
            v-close-popup />
          <q-btn
            color="primary"
            label="Editar"
            type="submit" />
        </q-card-actions>
      </form>

      </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import { MODIFICARTURNO } from '../../../store/Turnos/types.js'
import FormHeader from '../../Compartido/Formulario/FormHeader.vue'
import FormFecha from '../../Compartido/Formulario/FormFechaTurno.vue'
import FormHora from '../../Compartido/Formulario/FormHora.vue'

export default {
  props: ['turno', 'id'],
  components: {
    FormHeader,
    FormFecha,
    FormHora
  },
  data () {
    return {
      turnoEditar: {}
    }
  },
  methods: {
    ...mapActions('Turnos', [MODIFICARTURNO]),
    submitForm () {
      if (this.$refs.Fecha.$refs.fecha.validate() &&
          this.$refs.Hora.$refs.hora.validate()) {
        this.cargarTurno()
      }
    },
    cargarTurno () {
      this.modificarTurno({
        id: this.id,
        updates: this.turnoEditar
      })
      this.$emit('cerrar')
    }
  },
  mounted () {
    this.turnoEditar = Object.assign({}, this.turno)
  }
}
</script>

<style>

</style>
