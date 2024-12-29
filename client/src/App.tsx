import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./pages/user/UsersPage.tsx";
import MainPage from "./pages/MainPage.tsx";
import TeamsPage from "./pages/team/TeamPage.tsx";
import RegistrationPage from "./pages/auth/registration/RegistrationPage.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import LoginPage from "./pages/auth/login/LoginPage.tsx";
import MatchesPage from "./pages/matches/MatchesPage.tsx";
import MatchPage from "./pages/matches/MatchPage.tsx";
import MerchandiseListPage from "./pages/merchandise/MerchandiseListPage.tsx";
import MerchPage from "./pages/merchandise/MerchPage.tsx";
import OrderPage from "./pages/order/OrderPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/registration',
                element: <RegistrationPage/>
            },
            {
                path: '/users',
                element: <UsersPage/>
            },
            {
                path: '/teams',
                element: <TeamsPage/>
            },
            {
                path: '/matches',
                element: <MatchesPage/>
            },
            {
                path: '/match/:id',
                element: <MatchPage/>
            },
            {
                path: '/merches',
                element: <MerchandiseListPage/>
            },
            {
                path: '/merch/:id',
                element: <MerchPage/>
            },
            {
                path: '/order',
                element: <OrderPage/>
            }
        ]
    },
])

function App() {
    return <RouterProvider router={router}/>;
}

export default App
