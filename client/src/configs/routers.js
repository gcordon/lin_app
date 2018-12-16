/*eslint-disable*/
import Loadable from 'react-loadable'
import ContentLoader from '@/components/MyContentLoader/index.js'

const Home = Loadable({ loader: () => import('../routers/Home'), loading: () => ContentLoader, delay: 2000 })
const User = Loadable({ loader: () => import('../routers/User'), loading: () => ContentLoader, delay: 2000 })
const Course = Loadable({ loader: () => import('../routers/Course'), loading: () => ContentLoader , delay: 2000 })

export default
[{
    'path': '/home',
    'component': Home
}, {
    'path': '/user',
    'component': User
},{
    'path': '/course',
    'component': Course
},]