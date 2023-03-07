import loginRoutes from '../modules/auth/login/routes'
import signupRoutes from '../modules/auth/signup/routes'

export default [
    ...loginRoutes,
    ...signupRoutes,
    // ...userRoutes,
]