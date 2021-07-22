<template>
  <div class="row q-mb-none">
        <q-input
            label='Fecha de nacimiento'
            standout="bg-primary text-white"
            :value="fecha"
            @input="$emit('update:fecha', $event)"
            today-btn
            class="col"
            mask="date"
            ref="fecha"
            :rules="[val => !!val || 'Campo obligatorio', 'date']">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date
                                :value="fecha"
                                @input="$emit('update:fecha', $event)">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>
        </q-input>
    </div>
</template>

<script>
export default {
  props: ['fecha']
}
</script>

<style>

</style>
