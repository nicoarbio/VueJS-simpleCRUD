<template>
  <div class="row q-mb-none">
            <q-input
              standout="bg-primary text-white"
              :value="apellido"
              @input="$emit('update:apellido', $event)"
              label="Apellido"
              class="col"
              ref="apellido"
              :rules="[val => !!val || 'Campo obligatorio']">
                <template v-slot:append>
                  <q-icon
                    v-if="apellido"
                    name="close"
                    @click="$emit('update:apellido', '')"
                    class="cursor-pionter" />
                </template>
            </q-input>
          </div>
</template>

<script>
export default {
  props: ['apellido']
}
</script>

<style>

</style>
