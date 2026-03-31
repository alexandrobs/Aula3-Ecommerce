export function authorizedGuard(router: any) {
  router.beforeEach((to: any, from: any, next: any) => {
    const token = {
      role: 'customer',
    }
    if (to?.meta?.role) {
      if (to.meta.role.includes(token.role)) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })
}
