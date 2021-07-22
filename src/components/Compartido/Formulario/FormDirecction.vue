<template>
    <div class="row q-mb-none">
            <q-input
            standout="bg-primary text-white"
            :value="direccion"
            @input="$emit('update:direccion', $event)"
            label="Dirección"
            class="col"
            ref="direccion"
            :rules="[val => !!val || 'Campo obligatorio']">
              <template v-slot:append>
                  <q-icon
                    v-if="direccion"
                    name="close"
                    @click="$emit('update:direccion', '')"
                    class="cursor-pionter" />
                </template>
            </q-input>
          </div>
</template>

<script>
export default {
  props: ['direccion']
}
</script>

<style>

</style>
