import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";

export default function RootLayout() {
    return (<>
        <Header/>
        <Outlet/>
    </>)
}