
import formRouters from './pages/form/router';
import javascriptRouters from './pages/Javascript/router';
export default [
    { path: '/react', component: './index',
      routes: [
        { path: '/react/form', component: './form/index',
          routes: formRouters
        },
        { path: '/react/Javascript', component: './Javascript/index',
          routes: javascriptRouters
        },
      ]
    },
    { path: '/1024', component: './1024/index'},
    { path: '/', component: './resume/index'},
  ]