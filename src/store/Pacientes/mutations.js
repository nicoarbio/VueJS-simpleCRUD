import { ELINIMARPACIENTE, AGREGARPACIENTE, EDITARPACIENTE } from './types.js'
import Vue from 'vue'
export default {
  [ELINIMARPACIENTE]: (state, id) => {
    Vue.delete(state.pacientes, id)
  },
  [AGREGARPACIENTE]: (state, paciente) => {
    Vue.set(state.pacientes, paciente.id, paciente.paciente)
  },
  [EDITARPACIENTE]: (state, payload) => {
    Object.assign(state.pacientes[payload.id], payload.updates)
  }

}
