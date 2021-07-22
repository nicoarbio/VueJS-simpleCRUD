
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/paciente', component: () => import('pages/Pacientes.vue') },
      { path: '/medico', component: () => import('pages/Medicos.vue') },
      { path: '/turno', component: () => import('pages/Turnos.vue') },
      { path: '/estadistica', component: () => import('pages/Estadistica.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
