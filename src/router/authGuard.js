import { auth } from '../firebase.js'
export default function AuthGuard(to, from, next) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      next()
    } else {
      next('/login')
    }
  })
}
