import Chart from "../../../components/fragments/Chart";
import Sidebar from "../../fragments/Sidebar"
// import Profile from "../../fragments/Profile"    
import SidebarMobile from "../../fragments/SidebarMobile"
import Footer from "../../fragments/Footer"
import { Outlet } from "react-router-dom";


export default function DashboardMainLayouts () {
    <div className="bg-gray-100 font-Poppins flex">
    <Sidebar />

    <div className="w-full flex flex-col h-screen ">
        {/* <!-- Desktop Header --> */}
        {/* <Profile /> */}

        {/* <!-- Mobile Header & Nav-- > */}
        <SidebarMobile />
        {/* <Outlet/> */}
        <div className="w-full border-t flex flex-col">
            <Chart />
            <Footer />
        </div>

    </div >
</div >
}