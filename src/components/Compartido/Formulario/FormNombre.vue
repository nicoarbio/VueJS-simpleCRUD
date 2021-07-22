<template>
    <div class="row q-mb-none">
        <q-input
            standout="bg-primary text-white"
            :value="nombre"
            @input="$emit('update:nombre', $event)"
            autofocus
            label="Nombre"
            class="col"
            ref="nombre"
            :rules="[val => !!val || 'Campo obligatorio']">
                <template v-slot:append>
                    <q-icon
                        v-if="nombre"
                        name="close"
                        @click="$emit('update:nombre', '')"
                        class="cursor-pionter" />
                </template>
        </q-input>
    </div>
</template>

<script>
export default {
  props: ['nombre']
}
</script>

<style>

</style>
