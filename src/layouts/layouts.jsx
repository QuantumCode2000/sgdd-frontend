import {
    Outlet
} from 'react-router-dom';
import Navbar from "../components/Navbar"

const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default AppLayout;