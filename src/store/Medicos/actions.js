import { ELINIMARMEDICO, AGREGARMEDICO, EDITARMEDICO } from './types.js'

export default {
  [ELINIMARMEDICO]: ({ commit }, id) => {
    commit(ELINIMARMEDICO, id)
  },
  [AGREGARMEDICO]: ({ commit }, medico) => {
    const medicoNuevo = {
      id: medico.dni,
      medico
    }
    commit(AGREGARMEDICO, medicoNuevo)
  },
  [EDITARMEDICO]: ({ commit }, payload) => {
    commit(EDITARMEDICO, payload)
  }
}
