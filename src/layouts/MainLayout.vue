<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-icon
          name="edit_calendar"
          class="text-info"
           size="lg" />

        <q-toolbar-title>
          OrtConsultas
        </q-toolbar-title>

        <div>OrtConsultas beta</div>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="tab in navData"
          :key="tab.label"
          :to="tab.to"
          :icon="tab.icon"
          :label="tab.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="780"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navegación
        </q-item-label>
        <q-item
          v-for="nav in navData"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{nav.label}}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const navData = [
  {
    label: 'Inicio',
    icon: 'home',
    to: '/'
  },
  {
    label: 'Paciente',
    icon: 'accessibility',
    to: '/paciente'
  },
  {
    label: 'Medico',
    icon: 'medical_services',
    to: '/medico'
  },
  {
    label: 'Turno',
    icon: 'list_alt',
    to: '/turno'
  },
  {
    label: 'Estadistica',
    icon: 'assessment',
    to: '/estadistica'
  }
]

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: true,
      navData
    }
  }
}
</script>

<style>
  @media screen and (min-width: 768px){
    .q-footer{
      display: none;
    }
  }
</style>
