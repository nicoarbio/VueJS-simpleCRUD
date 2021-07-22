<template>
  <q-page class="q-pa-md">

    <div class="q-pa-lg q-px-xm row">
      <div class="col q-pa-md">
      <q-markup-table flat bordered>
      <thead class="bg-primary text-info">
        <tr>
          <th colspan="2">
            <div class="row justify-center">
              <div class="text-h4">Turnos</div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Estado</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3 text-center">
        <tr>
          <td>Reservado</td>
          <td>{{ reservados}}</td>
        </tr>
        <tr>
          <td>Finalizado</td>
          <td>{{ finalizado}}</td>
        </tr>
        <tr>
          <td>Cancelado</td>
          <td>{{ cancelado}}</td>
        </tr>
      </tbody>
     </q-markup-table>
    </div>
    </div>

    <div class="q-pa-lg q-px-xm row">
      <div class="col q-pa-md">
      <q-markup-table flat bordered>
      <thead class="bg-primary text-info">
        <tr>
          <th colspan="2">
            <div class="row justify-center">
              <div class="text-h4">Usuarios</div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Perfil</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3 text-center">
        <tr>
          <td>Paciente</td>
          <td>{{ pacientes }}</td>
        </tr>
        <tr>
          <td>Medico</td>
          <td>{{ medicos }}</td>
        </tr>
      </tbody>
     </q-markup-table>
    </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'PageEstadistica',
  computed: {
    reservados: function () {
      const turnos = this.$store.getters['Turnos/getTurno']
      const reservados = Object.keys(turnos)
        .map(key => turnos[key])
        .filter(turno => turno.estado === 'Reservado').length
      return reservados
    },
    finalizado: function () {
      const turnos = this.$store.getters['Turnos/getTurno']
      const reservados = Object.keys(turnos)
        .map(key => turnos[key])
        .filter(turno => turno.estado === 'Finalizado').length
      return reservados
    },
    cancelado: function () {
      const turnos = this.$store.getters['Turnos/getTurno']
      const reservados = Object.keys(turnos)
        .map(key => turnos[key])
        .filter(turno => turno.estado === 'Cancelado').length
      return reservados
    },
    pacientes: function () {
      const pacientes = this.$store.getters['Pacientes/getPaciente']
      const cantidad = Object.keys(pacientes)
        .map(key => pacientes[key]).length
      return cantidad
    },
    medicos: function () {
      const medicos = this.$store.getters['Medicos/getMedico']
      const cantidad = Object.keys(medicos)
        .map(key => medicos[key]).length
      return cantidad
    }
  },
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
