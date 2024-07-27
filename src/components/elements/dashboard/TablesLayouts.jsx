/* eslint-disable react/prop-types */
const TablesLayouts = ({children , className}) => {
    return (
        <table className={`min-w-full bg-white ${className}`}>
            {children}
        </table>
    )
}

const TablesHeadOne = ({title}) => {
    return (
        <thead className="bg-gray-800 text-white">
            <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">{title}</th>
            </tr>
        </thead>
    )
}

const TablesBodyOne = ({firstName, lastName, phone, email}) => {
    return (
        <tbody className="text-gray-700">
            <tr>
                <td className="w-1/3 text-left py-3 px-4">{firstName}</td>
                <td className="w-1/3 text-left py-3 px-4">{lastName}</td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >{phone}</a></td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >{email}</a></td>
            </tr>
        </tbody>
    )
}

TablesLayouts.TablesHeadOne = TablesHeadOne
TablesLayouts.TablesBodyOne = TablesBodyOne

export default TablesLayouts