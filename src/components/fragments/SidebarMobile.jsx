import AsideLink from "../elemets/dashboard/AsideLink"

export default function SidebarMobile() {
    return (
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <AsideLink href="/dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</AsideLink>
                <button className="text-white text-3xl focus:outline-none">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </button>
            </div>

            <AsideLink href="/dashboard" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </AsideLink>
            <AsideLink href="blankpages" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-sticky-note mr-3"></i>
                Blank Page
            </AsideLink>
            <AsideLink href="tables" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-table mr-3"></i>
                Tables
            </AsideLink>
            <AsideLink href="form" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-align-left mr-3"></i>
                Forms
            </AsideLink>
            <AsideLink href="tabs" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-tablet-alt mr-3"></i>
                Tabbed Content
            </AsideLink>
            <AsideLink href="calendar" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-calendar mr-3"></i>
                Calendar
            </AsideLink>
            <AsideLink href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-cogs mr-3"></i>
                Support
            </AsideLink>
            <AsideLink href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-user mr-3"></i>
                My Account
            </AsideLink>
            <AsideLink href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                <i className="fas fa-sign-out-alt mr-3"></i>
                Sign Out
            </AsideLink>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
            </button>
            < button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" >
                <i className="fas fa-plus mr-3"></i> New Report
            </button >
        </header >
    )
}