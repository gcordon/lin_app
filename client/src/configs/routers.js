/*eslint-disable*/
import Loadable from 'react-loadable'
import ContentLoader from '@/components/MyContentLoader/index.js'

const Home = Loadable({ loader: () => import('../routers/Home'), loading: () => ContentLoader, delay: 2000 })
const User = Loadable({ loader: () => import('../routers/User'), loading: () => ContentLoader, delay: 2000 })
const showCourse = Loadable({ loader: () => import('../routers/Course/showCourse'), loading: () => ContentLoader, delay: 2000 })
const addCourse = Loadable({ loader: () => import('../routers/Course/addCourse'), loading: () => ContentLoader , delay: 2000 })
const catCourse = Loadable({ loader: () => import('../routers/Course/catCourse'), loading: () => ContentLoader , delay: 2000 })

export default
[{
    'path': '/home',
    'component': Home
}, {
    'path': '/user',
    'component': User
},{
    'path': '/showCourse',
    'component': showCourse
}, {
    'path': '/addwCourse',
    'component': showCourse
},  {
    'path': '/catCourse/:id',
    'component': catCourse
},]