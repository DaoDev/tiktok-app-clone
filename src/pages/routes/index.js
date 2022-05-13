import { HeaderOnly } from "~/components/Layout"
import Following from "../Following"
import Home from "../Home"
import Profile from "../Profile"
import Search from "../Search"
import Upload from "../Upload"

//Public Routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
]

//Private Routes
const privateRoutes = [

]

export { privateRoutes, publicRoutes }