const routes_extension = [
  {
    path: "/",
    component: () => import("layouts/dacLayout.vue"),
    children: [
      {
        path: "example",
        component: () => import("../pages/example")
      },
      {
        path: "credits",
        component: () => import("../pages/credits.vue")
      },
      {
        path: "verify/:token",
        component: () => import("../pages/verify-token")
      }
    ]
  }
];

export default routes_extension;
