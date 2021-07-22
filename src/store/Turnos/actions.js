import { MODIFICARTURNO, ELINIMARTURNO, AGREGARTURNO } from './types.js'
import { uid } from 'quasar'
export default {
  [AGREGARTURNO]: ({ commit }, turno) => {
    const turnoId = uid()
    const turnoNuevo = {
      id: turnoId,
      turno
    }
    commit(AGREGARTURNO, turnoNuevo)
  },
  [MODIFICARTURNO]: ({ commit }, payload) => {
    commit(MODIFICARTURNO, payload)
  },
  [ELINIMARTURNO]: ({ commit }, id) => {
    commit(ELINIMARTURNO, id)
  }
}
