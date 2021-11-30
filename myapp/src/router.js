

import javascriptRouters from './pages/Reacts/Javascript/router';
export default [
    { path: '/', component: './index',
    
      routes: [
        { path: '/1024', component: './1024/index'},
        { path: '/resume', component: './Resume/index'},
        { path: '/react', component: './Reacts/index',
          routes: [
            { path: '/react/Javascript', component: './Reacts/Javascript/index',
              routes: javascriptRouters
            }
          ],
        },
        { redirect:'/react'}
      ],
    },
    
  ]