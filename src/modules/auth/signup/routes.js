import Signup from '../signup/pages/index'

export default [
    {
      path: '/signup',
      exact: true,
      auth: false,
      component: Signup,
    },
]