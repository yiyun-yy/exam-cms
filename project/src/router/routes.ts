import Main from '../views/main'
import Login from '../views/Login'
import Management from '../views/main/management'
import ExamManagement from '../views/main/examManagement'
import ClassManagement from '../views/main/classManagement'
import MarkManagement from '../views/main/markManagement'
import UserManagement from '../views/main/userManagement'

export default [
    {
        children: [
            {
                component: Management,
                path: '/main/management'
            }, {
                component: MarkManagement,
                path: '/main/markManagement'

            }, {
                component: ClassManagement,
                path: '/main/classManagement'

            }, {
                component: ExamManagement,
                path: '/main/examManagement'

            }, {
                component: UserManagement,
                path: '/main/userManagement'
            }, {
                from: '/main',
                to: '/main/management'
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