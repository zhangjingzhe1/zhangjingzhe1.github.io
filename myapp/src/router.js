
import formRouters from './pages/form/router'
export default [
    { path: '/', component: './index',
      routes: [
        { path: '/form', component: './form/index',
          routes: formRouters
        },
      ]
    },
  ]