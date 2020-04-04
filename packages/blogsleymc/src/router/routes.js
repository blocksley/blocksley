const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages') },
      { path: 'pages', component: () => import('pages/Pages') },
      { path: 'images', component: () => import('pages/Images') },
      { path: 'users', component: () => import('pages/Users') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'pages/create', component: () => import('pages/Pages/Create'), props: true },
      { path: 'pages/:id', component: () => import('pages/Pages/Update'), props: true },
      // { path: 'pages/:id', component: () => import('pages/Pages/Edit'), props: true },
      { path: 'pages/:id/json', name: 'json', component: () => import('pages/Pages/Json'), props: true },
      // { path: 'pages/:id/text', name: 'text', component: () => import('pages/Pages/Text'), props: true },
      { path: 'images/create', component: () => import('pages/Images/Create'), props: true },
      { path: 'images/:id', component: () => import('pages/Images/Update'), props: true },
      { path: 'imagechooser', name: 'imagechooser', component: () => import('pages/Images/Chooser'), props: true },
      { path: 'users/create', component: () => import('pages/Users/Create'), props: true },
      { path: 'users/:id', component: () => import('pages/Users/Update'), props: true }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
