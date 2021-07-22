import { ELINIMARMEDICO, AGREGARMEDICO, EDITARMEDICO } from './types.js'
import Vue from 'vue'
export default {
  [ELINIMARMEDICO]: (state, id) => {
    Vue.delete(state.medicos, id)
  },
  [AGREGARMEDICO]: (state, medico) => {
    Vue.set(state.medicos, medico.id, medico.medico)
  },
  [EDITARMEDICO]: (state, payload) => {
    Object.assign(state.medicos[payload.id], payload.updates)
  }

}
