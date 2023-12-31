import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom';
// import Navbar from "../components/Navbar"
import AppLayout from '../layouts/layouts.jsx';
import Borradores from '../modules/Borradores'


const router = createBrowserRouter(
    [{
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Borradores />
            },
            // not found
            {
                path: '*',
                element: <h1>Not Found</h1>
            }
        ]

    }]

)

export default router;