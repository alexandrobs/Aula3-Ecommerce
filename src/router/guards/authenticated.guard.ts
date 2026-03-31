export function authenticatedGuard(router: any) {
  router.beforeEach((to: any, from: any, next: any) => {
    if (to.path === '/login' || to.path === '/register') {
      return next()
    }
    if (to?.meta?.auth) {
      const auth = {
        token: {
          isAuth: false,
        },
      }
      if (!auth.token.isAuth) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })
}
