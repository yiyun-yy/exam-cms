import  Main from '../views/main'
import  Login from '../views/Login'

export default [
    {
        component:Main,
        path:'/main'
    },
    {
        component:Login,
        path:'/login'
    },
    {
        from:'/',
        to:'/login'
    }
]