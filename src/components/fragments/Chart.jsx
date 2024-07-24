import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function Chart() {
    return (
        <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>
        <div className="flex flex-wrap mt-6">
            {/* Box Chart Left */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                <p className="text-xl pb-3 flex items-center">
                    <FaPlus className="mr-3" /> Monthly Reports
                </p>
                    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                        <div className="flex justify-between">
                            <div>
                                <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
                            </div>
                            <div
                                className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                                12%
                                <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                                </svg>
                            </div>
                        </div>
                        <div id="area-chart"></div>
                        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                            <div className="flex justify-between items-center pt-5">
                                {/* <!-- Button --> */}
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="lastDaysdropdown"
                                    data-dropdown-placement="bottom"
                                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                                    type="button">
                                    Last 7 days
                                    <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="#"
                                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                    Users Report
                                    <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
            {/* Box Chart Right */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                <p className="text-xl pb-3 flex items-center">
                    <FaCheck className="mr-3" /> Resolved Reports
                </p>
                <div className="">
                    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                        <div className="flex justify-between">
                            <div>
                                <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
                            </div>
                            <div
                                className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                                12%
                                <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                                </svg>
                            </div>
                        </div>
                        <div id="area-chart"></div>
                        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                            <div className="flex justify-between items-center pt-5">
                                {/* <!-- Button --> */}
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="lastDaysdropdown"
                                    data-dropdown-placement="bottom"
                                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                                    type="button">
                                    Last 7 days
                                    <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="#"
                                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                    Users Report
                                    <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full mt-12">
            <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-list mr-3"></i> Latest Reports
            </p>
            <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr>
                            <td className="w-1/3 text-left py-3 px-4">Lian</td>
                            <td className="w-1/3 text-left py-3 px-4">Smith</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="w-1/3 text-left py-3 px-4">Emma</td>
                            <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                            <td className="w-1/3 text-left py-3 px-4">Williams</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                            <td className="w-1/3 text-left py-3 px-4">Brown</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 text-left py-3 px-4">Lian</td>
                            <td className="w-1/3 text-left py-3 px-4">Smith</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="w-1/3 text-left py-3 px-4">Emma</td>
                            <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr>
                            <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                            <td className="w-1/3 text-left py-3 px-4">Williams</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                            <td className="w-1/3 text-left py-3 px-4">Brown</td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    )
}