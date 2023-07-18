import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import { createRouter, createWebHistory, useRoute, useRouter } from 'vue-router'
import routes from './router/routes'
import { createMetaManager } from 'vue-meta'
// import { Logic } from 'app-logic' 
import DashboardLayout from './layouts/Dashboard.vue'
import DefaultLayout from './layouts/Default.vue'
import MilestoneDashboardLayout from './layouts/MilestoneDashboard.vue'
import AuthLayout from './layouts/Auth.vue'
import SubPageLayout from './layouts/SubPage.vue'

// UI component css style
// import 'sofa-ui-components/dist/library.min.css'

// You can disable this if you dont want TailwindCss
import './assets/app.css'

import { store, key } from './store'

const router = Promise.all(routes).then((routes) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach((to, from, next) => {
    const toRouter: any = to
    const fromRouter: any = from
    // setup middlewares using the logic package
    // return Logic.Common.preFetchRouteData(toRouter, next, fromRouter)
    return next()
  })

  return router
})

const init = async () => {
  createApp({
    components: {
      App,
    },
    setup() {
      const router: any = useRouter()
      const route: any = useRoute()

      // setup logic route and routers
      // Logic.Common.SetRouter(router)
      // Logic.Common.SetRoute(route)

      // Setup backend api url
      // Logic.Common.SetApiUrl(process.env.VUE_APP_API_URL || '')

      // set ui frontend logic
      // SetFrontendLogic(Logic)

      // const AuthUser = localStorage.getItem('auth_user')
      //   ? JSON.parse(localStorage.getItem('auth_user') || '{}')
      //   : undefined

      // if (AuthUser == undefined) {
      //   if (!window.location.href.includes('/auth/reset-password')) {
      //     Logic.Common.GoToRoute('/auth/login')
      //   }
      // } else {
      //   // fetch auth user in background
      //   Logic.Auth.GetAuthUser()
      // }
    },
  })
    .component('dashboard-layout', DashboardLayout)
    .component('challenges-layout', DashboardLayout)
    .component('default-layout', DefaultLayout)
    .component('milestone-dashboard-layout', MilestoneDashboardLayout)
    .component('auth-layout', AuthLayout)
    .component('subpage-layout', SubPageLayout)
    .use(await router)
    .use(store, key)
    .use(createMetaManager())
    .mount('#app')
}

init()
