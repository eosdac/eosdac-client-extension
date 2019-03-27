const routes_extension = [
    {
      path: '/',
      component: () => import('layouts/MyLayout.vue'),
      children: [
        { path: 'example', component: () => import('../pages/example') },
      ]
    }
  
  ]

  export default routes_extension
  