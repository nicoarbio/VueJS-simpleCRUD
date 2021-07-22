<template>
  <q-card>

    <FormHeader>Modificar paciente</FormHeader>

      <form @submit="submitForm">
          <q-card-section class="q-mx-md">

            <FormNombre :nombre.sync="pacienteEditar.nombre" ref="Nombre"></FormNombre>

            <FormEmail :email.sync="pacienteEditar.email" ref="Email"></FormEmail>

            <FormDireccion :direccion.sync="pacienteEditar.direccion" ref="Direccion"></FormDireccion>
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
import { EDITARPACIENTE } from '../../../store/Pacientes/types.js'
import FormHeader from '../../Compartido/Formulario/FormHeader.vue'
import FormNombre from '../../Compartido/Formulario/FormNombre.vue'
import FormEmail from '../../Compartido/Formulario/FormEmail.vue'
import FormDireccion from '../../Compartido/Formulario/FormDirecction.vue'

export default {
  props: ['paciente', 'id'],
  components: {
    FormHeader,
    FormNombre,
    FormEmail,
    FormDireccion
  },
  data () {
    return {
      pacienteEditar: {}
    }
  },
  methods: {
    ...mapActions('Pacientes', [EDITARPACIENTE]),
    submitForm () {
      if (this.$refs.Nombre.$refs.nombre.validate() &&
          this.$refs.Email.$refs.email.validate() &&
          this.$refs.Direccion.$refs.direccion.validate()) {
        this.cargarPaciente()
      }
    },
    cargarPaciente () {
      this.editarPaciente({
        id: this.id,
        updates: this.pacienteEditar
      })
      this.$emit('cerrar')
    }
  },
  mounted () {
    this.pacienteEditar = Object.assign({}, this.paciente)
  }
}
</script>

<style>

</style>
