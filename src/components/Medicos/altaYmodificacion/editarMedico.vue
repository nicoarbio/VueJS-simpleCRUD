<template>
  <q-card>

    <FormHeader>Modificar medico</FormHeader>

      <form @submit="submitForm">
          <q-card-section class="q-mx-md">

            <FormNombre :nombre.sync="medicoEditar.nombre" ref="Nombre"></FormNombre>

            <q-select
              standout="bg-primary text-white"
              transition-show="scale"
              transition-hide="scale"
              v-model="medicoEditar.especialidad"
              options-cover
              ref="especialidad"
              :options="options"
              :rules="[val => !!val || 'Campo obligatorio']"
              label="Especialidad" />

            <FormEmail :email.sync="medicoEditar.email" ref="Email"></FormEmail>

            <FormDireccion :direccion.sync="medicoEditar.direccion" ref="Direccion"></FormDireccion>
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
import { EDITARMEDICO } from '../../../store/Medicos/types.js'
import FormHeader from '../../Compartido/Formulario/FormHeader.vue'
import FormNombre from '../../Compartido/Formulario/FormNombre.vue'
import FormEmail from '../../Compartido/Formulario/FormEmail.vue'
import FormDireccion from '../../Compartido/Formulario/FormDirecction.vue'

export default {
  props: ['medico', 'id'],
  components: {
    FormHeader,
    FormNombre,
    FormEmail,
    FormDireccion
  },
  data () {
    return {
      medicoEditar: {},
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
    ...mapActions('Medicos', [EDITARMEDICO]),
    submitForm () {
      if (this.$refs.Nombre.$refs.nombre.validate() &&
          this.$refs.especialidad.validate() &&
          this.$refs.Email.$refs.email.validate() &&
          this.$refs.Direccion.$refs.direccion.validate()) {
        this.cargarMedico()
      }
    },
    cargarMedico () {
      this.editarMedico({
        id: this.id,
        updates: this.medicoEditar
      })
      this.$emit('cerrar')
    }
  },
  mounted () {
    this.medicoEditar = Object.assign({}, this.medico)
  }
}
</script>

<style>

</style>
