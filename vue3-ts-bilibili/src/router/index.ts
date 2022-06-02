import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

function getRoutes() {
  const { routes } = loadRouters();
  /**
   * 如果要对 routes 做一些处理，请在这里修改
   */
  routes.find(item => {
    if (item.path === '/video') {
      item.path = '/video/:id'
    }
  })
  return routes;
}

const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes()
})

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;

/** 以下代码不要修改 */
function loadRouters() {
  const context = import.meta.globEager("../views/**/*.vue");
  const routes: RouteRecordRaw[] = [];

  Object.keys(context).forEach((key: any) => {
    if (key === "./index.ts") return;
    let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
    let path = "/" + name.replace(/\/index/g, '').toLowerCase();
    if (name === "Home/index") path = "/";
    routes.push({
      path: path,
      name: name,
      component: () => import(`../views/${name}.vue`)
    })
  });

  return { context, routes }
}
