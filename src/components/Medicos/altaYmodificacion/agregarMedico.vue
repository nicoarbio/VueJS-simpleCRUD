<template>
  <q-card>

    <FormHeader>Agregar un nuevo medico</FormHeader>

      <form @submit="submitForm">
          <q-card-section class="q-mx-md">

            <FormNombre :nombre.sync="medicoNuevo.nombre" ref="Nombre"></FormNombre>

            <FormApellido :apellido.sync="medicoNuevo.apellido" ref="Apellido"></FormApellido>

            <FormDni :dni.sync="medicoNuevo.dni" ref="Dni"></FormDni>

            <FormFecha :fecha.sync="medicoNuevo.fechaNacimiento" ref="Fecha"></FormFecha>

            <q-select
              standout="bg-primary text-white"
              transition-show="scale"
              transition-hide="scale"
              v-model="medicoNuevo.especialidad"
              options-cover
              ref="especialidad"
              :options="options"
              :rules="[val => !!val || 'Campo obligatorio']"
              label="Especialidad" />

            <FormEmail :email.sync="medicoNuevo.email" ref="Email"></FormEmail>

            <FormDireccion :direccion.sync="medicoNuevo.direccion" ref="Direccion"></FormDireccion>
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
import { AGREGARMEDICO } from '../../../store/Medicos/types.js'
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
      medicoNuevo: {
        nombre: '',
        apellido: '',
        dni: '',
        especialidad: '',
        direccion: '',
        email: '',
        fechaNacimiento: ''
      },
      options: [
        'Anestesiología',
        'Cardiología',
        'Neumología',
        'Neurocirugía',
        'Odontología',
        'Oftalmología',
        'Psicología',
        'Traumatología'
      ]
    }
  },
  methods: {
    ...mapActions('Medicos', [AGREGARMEDICO]),
    submitForm () {
      if (this.$refs.Nombre.$refs.nombre.validate() &&
          this.$refs.Apellido.$refs.apellido.validate() &&
          this.$refs.Dni.$refs.dni.validate() &&
          this.$refs.Fecha.$refs.fecha.validate() &&
          this.$refs.especialidad.validate() &&
          this.$refs.Email.$refs.email.validate() &&
          this.$refs.Direccion.$refs.direccion.validate()) {
        this.cargarMedico()
      }
    },
    cargarMedico () {
      this.agregarMedico(this.medicoNuevo)
      this.$emit('cerrar')
    }
  }

}
</script>

<style>

</style>
