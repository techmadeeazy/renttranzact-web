import Login from './pages/index'

export default [
    {
      path: '/login',
      exact: true,
      auth: false,
      component: Login,
    },
]