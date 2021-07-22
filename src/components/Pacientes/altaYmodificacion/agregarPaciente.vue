<template>
  <q-card>

    <FormHeader>Agregar paciente nuevo</FormHeader>

      <form @submit="submitForm">
          <q-card-section class="q-mx-md">

            <FormNombre :nombre.sync="pacienteNuevo.nombre" ref="Nombre"></FormNombre>

            <FormApellido :apellido.sync="pacienteNuevo.apellido" ref="Apellido"></FormApellido>

            <FormDni :dni.sync="pacienteNuevo.dni" ref="Dni"></FormDni>

            <FormFecha :fecha.sync="pacienteNuevo.fechaNacimiento" ref="Fecha"></FormFecha>

            <FormEmail :email.sync="pacienteNuevo.email" ref="Email"></FormEmail>

            <FormDireccion :direccion.sync="pacienteNuevo.direccion" ref="Direccion"></FormDireccion>
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
import { AGREGARPACIENTE } from '../../../store/Pacientes/types.js'
import FormHeader from '../../Compartido/Formulario/FormHeader.vue'
import FormNombre from '../../Compartido/Formulario/FormNombre.vue'
import FormApellido from '../../Compartido/Formulario/FormApellido.vue'
import FormDni from '../../Compartido/Formulario/FormDni.vue'
import FormFecha from '../../Compartido/Formulario/FormFecha.vue'
import FormEmail from '../../Compartido/Formulario/FormEmail.vue'
import FormDireccion from '../../Compartido/Formulario/FormDirecction.vue'

export default {
  components: {
    FormHeader,
    FormNombre,
    FormApellido,
    FormDni,
    FormFecha,
    FormEmail,
    FormDireccion
  },
  data () {
    return {
      pacienteNuevo: {
        nombre: '',
        apellido: '',
        dni: '',
        direccion: '',
        email: '',
        fechaNacimiento: ''
      }
    }
  },
  methods: {
    ...mapActions('Pacientes', [AGREGARPACIENTE]),
    submitForm () {
      if (this.$refs.Nombre.$refs.nombre.validate() &&
          this.$refs.Apellido.$refs.apellido.validate() &&
          this.$refs.Dni.$refs.dni.validate() &&
          this.$refs.Fecha.$refs.fecha.validate() &&
          this.$refs.Email.$refs.email.validate() &&
          this.$refs.Direccion.$refs.direccion.validate()) {
        this.cargarPaciente()
      }
    },
    cargarPaciente () {
      this.agregarPaciente(this.pacienteNuevo)
      this.$emit('cerrar')
    }
  }

}
</script>

<style>

</style>
