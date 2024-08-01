import TablesLayouts from "../elements/dashboard/TablesLayouts"

export default function Table() {
    return (
        <main className="w-full flex-grow p-6">
                    <h1 className="text-3xl text-black pb-6">Tables</h1>
                    <div className="w-full mt-6">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <TablesLayouts>
                                <TablesLayouts.TablesHeadOne className={"bg-gray-800 text-white"} title="Name" />
                                <TablesLayouts.TablesHeadOne className={"bg-gray-800 text-white"} title="Last Name" />
                                <TablesLayouts.TablesHeadOne className={"bg-gray-800 text-white"} title="Phone" />
                                <TablesLayouts.TablesHeadOne className={"bg-gray-800 text-white"} title="Email" />
                                <TablesLayouts.TablesBodyOne className={"bg-gray-800 text-white"} firstName="Lian" lastName="Smith" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="Emma" lastName="Johnson" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="John" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="Jane" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="Mary" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
                            </TablesLayouts>
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
                            <TablesLayouts >
                                <TablesLayouts.TablesHeadOne title="Name" />
                                <TablesLayouts.TablesHeadOne title="Last Name" />
                                <TablesLayouts.TablesHeadOne title="Phone" />
                                <TablesLayouts.TablesHeadOne title="Email" />
                                <TablesLayouts.TablesBodyOne firstName="Lian" lastName="Smith" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="Emma" lastName="Johnson" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="John" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
                                <TablesLayouts.TablesBodyOne firstName="Jane" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
                            </TablesLayouts>
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
                            <TablesLayouts>
                                <TablesLayouts.TablesHeadTwo title="User" />
                                <TablesLayouts.TablesHeadTwo title="Rol" />
                                <TablesLayouts.TablesHeadTwo title="Created at" />
                                <TablesLayouts.TablesHeadTwo title="Status" />
                                <TablesLayouts.TablesBodyTwo img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" name="Vera Carpenter" rol="Admin" created="Jan 21, 2020" className="absolute inset-0 bg-green-200 opacity-50 rounded-full" status="Active" />
                                <TablesLayouts.TablesBodyTwo img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" name="Blake Bowman" rol="Editor" created="Jan 01, 2020" className="absolute inset-0 bg-green-200 opacity-50 rounded-full" status="Active" />
                                <TablesLayouts.TablesBodyTwo img="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" name="Dana Moore" rol="Editor" created="Jan 10, 2020" className="absolute inset-0 bg-orange-200 opacity-50 rounded-full" className2="text-orange-800" status="Suspended"/>
                                <TablesLayouts.TablesBodyTwo img="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" name="Alonzo Cox" rol="Admin" created="Jan 18, 2020" className="absolute inset-0 bg-red-200 opacity-50 rounded-full" className2="text-red-900" status="Inactive"/>
                            </TablesLayouts>
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/table-responsive-with-filters">https://tailwindcomponents.com/component/table-responsive-with-filters</a>
                        </p>
                    </div>
                </main>
    )
}