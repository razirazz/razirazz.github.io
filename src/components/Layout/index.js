import './index.scss'
import SideBar from '../sideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
    <div className='App'>
        <SideBar />
        <div className='page'>

            <Outlet />

            <span className='tags bottom-tags'>
            </span>
        </div>
    </div>
    )
}

export default Layout