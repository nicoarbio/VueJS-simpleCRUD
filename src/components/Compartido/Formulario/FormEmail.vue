<template>
  <div class="row q-mb-none">
            <q-input
            standout="bg-primary text-white"
            :value="email"
            @input="$emit('update:email', $event)"
            label="Correo electrónico"
            class="col"
            ref="email"
            :rules="[
                val => !!val || 'Campo obligatorio',
                val => isValidEmail(email)]">
            <template v-slot:append>
                <q-icon
                  v-if="email"
                  name="close"
                  @click="$emit('update:email', '')"
                  class="cursor-pionter" />
            </template>
            </q-input>
  </div>
</template>

<script>
export default {
  props: ['email'],
  methods: {
    isValidEmail (email) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(email) || 'Email invalido'
    }
  }
}
</script>

<style>

</style>
