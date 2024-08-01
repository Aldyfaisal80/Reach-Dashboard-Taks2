/* eslint-disable react/prop-types */
const TablesLayouts = ({ children, className }) => {
    return (
        <table className={`min-w-full bg-white ${className}`}>
            {children}
        </table>
    )
}

const TablesHeadOne = ({ title, className }) => {
    return (
        <th scope="col" className={`w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm ${className}`}>{title}</th>
    )
}


const TablesBodyOne = ({ firstName, lastName, phone, email }) => {
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

const TablesHeadTwo = ({ title }) => {
    return (
        <th
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            {title}
        </th>
    )
}

const TablesBodyTwo = ({ img, name, rol, created, status, className, className2 }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={img}
                            alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {name}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{rol}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {created}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                        className={`${className}`}></span>
                    <span className={`relative ${className2}`}>{status}</span>
                </span>
            </td>
        </tr>
    )
}

TablesLayouts.TablesHeadOne = TablesHeadOne
TablesLayouts.TablesBodyOne = TablesBodyOne
TablesLayouts.TablesHeadTwo = TablesHeadTwo
TablesLayouts.TablesBodyTwo = TablesBodyTwo

export default TablesLayouts