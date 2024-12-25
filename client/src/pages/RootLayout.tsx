import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";

export default function RootLayout() {
    return (<>
        <Header/>
        <div className="w-full flex justify-center">
            <div className="w-3/5 flex flex-col">
                <Outlet/>
            </div>
        </div>

    </>)
}