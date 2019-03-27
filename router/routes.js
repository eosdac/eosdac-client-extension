const routes_extension = [
    {
      path: '/example',
      component: () => import('layouts/MyLayout.vue'),
      children: [
        { path: '', component: () => import('../pages/example') },
      ]
    }
  
  ]

  export default routes_extension
  