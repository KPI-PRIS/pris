import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import UsersPage from "./pages/user/UsersPage.tsx";
import MainPage from "./pages/MainPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <><Outlet/></>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            }
        ]
    },
])

function App() {
    return <RouterProvider router={router}/>;
}

export default App
