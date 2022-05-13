import Following from "../Following"
import Home from "../Home"
import Profile from "../Profile"

//Public Routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile}
]

//Private Routes
const privateRoutes = [

]

export { privateRoutes, publicRoutes }