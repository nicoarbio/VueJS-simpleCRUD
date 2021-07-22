import { MODIFICARTURNO, ELINIMARTURNO, AGREGARTURNO } from './types.js'
import Vue from 'vue'
export default {
  [MODIFICARTURNO]: (state, payload) => {
    Object.assign(state.turnos[payload.id], payload.updates)
  },
  [ELINIMARTURNO]: (state, id) => {
    Vue.delete(state.turnos, id)
  },
  [AGREGARTURNO]: (state, turno) => {
    Vue.set(state.turnos, turno.id, turno.turno)
  }
}
