import {createBrowserRouter, RouterProvider} from "react-router-dom";
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
import AuthLayout from "./pages/AuthLayout.tsx";
import ProfilePage from "./pages/profile/ProfilePage.tsx";
import OrderPersonalListPage from "./pages/order/OrderPersonalListPage.tsx";
import TeamFormPage from "./pages/team/form/TeamFormPage.tsx";
import MerchEditPage from "./components/merch/MerchEditPage.tsx";

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
                path: '/auth',
                element: <AuthLayout/>,
                children: [
                    {
                        path: 'profile',
                        element: <ProfilePage/>
                    },
                    {
                        path: 'orders',
                        element: <OrderPersonalListPage/>
                    }
                ]
            },
            {
                path: '/auth-admin',
                element: <AuthLayout role="ADMIN"/>,
                children: [
                    {
                        path: 'team/manage',
                        element: <TeamFormPage/>
                    },
                    {
                        path: 'merch/manage/:id',
                        element: <MerchEditPage/>
                    },
                ]
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
