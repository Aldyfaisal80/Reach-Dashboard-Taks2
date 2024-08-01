import { Outlet } from "react-router-dom";
import TabsLink from "../../components/elements/dashboard/TabsLink";

export default function TabsDashboard() {
    return (
        <div className="bg-gray-100 font-Poppins flex">
            <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Tabbed Content</h1>
                        <div className="w-full mt-6">
                            <div>
                                <ul className="flex border-b">
                                    <li className="-mb-px mr-1">
                                        <TabsLink className="border-l border-t border-r rounded-t text-blue-700 font-semibold bg-white inline-block py-2 px-4" href="/tabs/tabs-content-one">
                                            Tab 1
                                        </TabsLink>
                                    </li>
                                    <li className="-mb-px mr-1">
                                        <TabsLink className="border-l border-t border-r rounded-t text-blue-700 font-semibold bg-white inline-block py-2 px-4" href="/tabs/tabs-content-two">
                                            Tab 2
                                        </TabsLink>
                                    </li>
                                    <li className="-mb-px mr-1">
                                        <TabsLink className="border-l border-t border-r rounded-t text-blue-700 font-semibold bg-white inline-block py-2 px-4" href="/tabs/tabs-content-three">
                                            Tab 3
                                        </TabsLink>
                                    </li>
                                    <li className="-mb-px mr-1">
                                        <TabsLink className="border-l border-t border-r rounded-t text-blue-700 font-semibold bg-white inline-block py-2 px-4" href="/tabs/tabs-content-four">
                                            Tab 4
                                        </TabsLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6">
                                <Outlet />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
