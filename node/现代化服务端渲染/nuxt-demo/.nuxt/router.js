import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31a0319a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _425e7b70 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _e3143440 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _ef2fdabc = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _65b85c36 = () => interopDefault(import('..\\pages\\user\\one.vue' /* webpackChunkName: "pages/user/one" */))
const _0ebe558a = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _02eec5e6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/abc/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _31a0319a,
    name: "404"
  }, {
    path: "/about",
    component: _425e7b70,
    name: "about"
  }, {
    path: "/user",
    component: _e3143440,
    children: [{
      path: "",
      component: _ef2fdabc,
      name: "user"
    }, {
      path: "one",
      component: _65b85c36,
      name: "user-one"
    }, {
      path: ":id",
      component: _0ebe558a,
      name: "user-id"
    }]
  }, {
    path: "/",
    component: _02eec5e6,
    name: "index"
  }, {
    path: "*",
    component: _31a0319a,
    name: "custom"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
