import Main from '../views/main'
import Login from '../views/Login'
import AddList from '../views/main/addList'
import CheckTextQuestion from '../views/main/checkTextQuestion'
import TextQuestion from '../views/main/textQuestion'


export default {
    routes: [
        {
            children: [
                {
                    component: AddList,
                    path: '/main/addlist'
                }, {
                    component: CheckTextQuestion,
                    path: '/main/checkTextQuestion'
    
                }, {
                    component: TextQuestion,
                    path: '/main/textQuestion'
    
                }, {
                    from: '/main',
                    to: '/main/addlist'
                }
            ],
            component: Main,
            path: '/main'
        },
        {
            component: Login,
            path: '/login'
        },
        {
            from: '/',
            to: '/login'
        }
    ]
}