import Sidebar from "../../fragments/Sidebar";
import Footer from "../../fragments/Footer";
import { Outlet } from "react-router-dom";

export default function DashboardMainLayouts() {
    return (
        <div className="bg-gray-100 font-Poppins flex h-screen overflow-hidden">
            <Sidebar />
            <div className="w-full flex flex-col">
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}
