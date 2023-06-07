import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function LayoutHeader() {
    

    return (
        <main>
            <Header/>
            <Outlet />
        </main>
    );
}
