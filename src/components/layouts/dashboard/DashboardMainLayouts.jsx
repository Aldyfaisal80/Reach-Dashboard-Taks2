import Chart from "../../../components/fragments/Chart";
import Sidebar from "../../fragments/Sidebar"
// import Profile from "../../fragments/Profile"    
import SidebarMobile from "../../fragments/SidebarMobile"
import Footer from "../../fragments/Footer"
import Table from "../../fragments/Table";


export default function DashboardMainLayouts () {
    return (
    <div className="bg-gray-100 font-Poppins flex">
    <Sidebar />

    <div className="w-full flex flex-col h-screen ">
        {/* <!-- Desktop Header --> */}
        {/* <Profile /> */}

        {/* <!-- Mobile Header & Nav-- > */}
        <SidebarMobile />
        <div className="w-full border-t flex flex-col">
            <Chart />
                <Table />
            <Footer />
        </div>

    </div >
</div >
    )
}