import Footer from "../../components/fragments/Footer"
import TableVersionOne from "../../components/fragments/TableVersionOne"
import TableVersionTwo from "../../components/fragments/TableVersionTwo"
import TableVersionThree from "../../components/fragments/TableVersionThree"

export default function TablesDashboard() {
    return (
        <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h1 className="text-3xl text-black pb-6">Tables</h1>
                    <div className="w-full mt-6">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <TableVersionOne />
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/striped-table">https://tailwindcomponents.com/component/striped-table</a>
                        </p>
                    </div>

                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <TableVersionTwo />
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/table">https://tailwindcomponents.com/component/table</a>
                        </p>
                    </div>
                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <TableVersionThree/>
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/table-responsive-with-filters">https://tailwindcomponents.com/component/table-responsive-with-filters</a>
                        </p>
                    </div>
                </main>
                <Footer />
            </div>

        </div>
    )
}