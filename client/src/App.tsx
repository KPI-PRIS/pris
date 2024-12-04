import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./pages/user/UsersPage.tsx";
import MainPage from "./pages/MainPage.tsx";
import TeamsPage from "./pages/team/TeamPage.tsx";
import RegistrationPage from "./pages/auth/registration/RegistrationPage.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import LoginPage from "./pages/auth/login/LoginPage.tsx";
import MatchesPage from "./pages/matches/MatchesPage.tsx";
import {ErrorCodes} from "./pages/errors/ErrorMessages.ts";
import ErrorPage from "./pages/errors/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage errorCode={ErrorCodes.NotFound}/>,
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
        ]
    },
])

function App() {
    return <RouterProvider router={router}/>;
}

export default App
