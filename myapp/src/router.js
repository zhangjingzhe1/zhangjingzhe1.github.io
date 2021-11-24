
import formRouters from './pages/form/router'
export default [
    { path: '/react', component: './index',
      routes: [
        { path: '/react/form', component: './form/index',
          routes: formRouters
        },
        { path: '/react/1024', component: './1024/index'},
        
      ]
    },
    { path: '/', component: './resume/index'},
  ]