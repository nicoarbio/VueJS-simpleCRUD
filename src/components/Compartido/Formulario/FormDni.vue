<template>
  <div class="row q-mb-none">
        <q-input
            standout="bg-primary text-white"
            :value="dni"
            @input="$emit('update:dni', $event)"
            label="Dni"
            class="col"
            type="number"
            ref="dni"
            :rules="[
                val => !!val || 'Campo obligatorio',
                val => val.length < 8  || 'Dni invalido'
            ]" />
          </div>
</template>

<script>
export default {
  props: ['dni']
}
</script>

<style>

</style>
