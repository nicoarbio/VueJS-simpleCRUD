import { ELINIMARPACIENTE, AGREGARPACIENTE, EDITARPACIENTE } from './types.js'

export default {
  [EDITARPACIENTE]: ({ commit }, payload) => {
    commit(EDITARPACIENTE, payload)
  },
  [ELINIMARPACIENTE]: ({ commit }, id) => {
    commit(ELINIMARPACIENTE, id)
  },
  [AGREGARPACIENTE]: ({ commit }, paciente) => {
    const pacienteNuevo = {
      id: paciente.dni,
      paciente
    }
    commit(AGREGARPACIENTE, pacienteNuevo)
  }
}
