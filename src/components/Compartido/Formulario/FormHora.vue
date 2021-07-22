<template>
  <div class="row q-mb-none">
            <q-input
              label='Hora'
              standout="bg-primary text-white"
              :value="hora"
              @input="$emit('update:hora', $event)"
              mask="time"
              class="col"
              ref="hora"
              :rules="[val => !!val || 'Campo obligatorio', 'time']">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time
                        :value="hora"
                        @input="$emit('update:hora', $event)">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
</template>

<script>
export default {
  props: ['hora']
}
</script>

<style>

</style>
