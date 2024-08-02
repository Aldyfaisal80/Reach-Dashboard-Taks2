import Chart from "../../components/fragments/Chart";
import TableVersionOne from "../../components/fragments/TableVersionOne";

export default function Dashboard() {
    return (
        <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <div className="w-full flex-grow p-6 ">
                    <h1 className="text-3xl">Dashboard</h1>
                    <Chart />
                    <p className="text-xl mt-6 pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Latest Reports
                    </p>
                    <div className="bg-white overflow-auto">
                        <TableVersionOne />
                    </div>
                </div>
            </div>
        </div >

    )
}