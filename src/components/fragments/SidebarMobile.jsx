import { FaTachometerAlt, FaStickyNote, FaTable, FaAlignLeft, FaTabletAlt, FaCalendar, FaCogs, FaUser, FaSignOutAlt, FaArrowCircleUp, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import AsideLink from "../elemets/dashboard/AsideLink";

export default function SidebarMobile() {
    return (
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <AsideLink href="/dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</AsideLink>
                <button className="text-white text-3xl focus:outline-none">
                    <FaBars />
                    <FaTimes />
                </button>
            </div>

            <AsideLink href="/dashboard">
                <FaTachometerAlt className="mr-3" />
                Dashboard
            </AsideLink>
            <AsideLink href="/blankpages">
                <FaStickyNote className="mr-3" />
                Blank Page
            </AsideLink>
            <AsideLink href="/tables">
                <FaTable className="mr-3" />
                Tables
            </AsideLink>
            <AsideLink href="/form">
                <FaAlignLeft className="mr-3" />
                Forms
            </AsideLink>
            <AsideLink href="/tabs">
                <FaTabletAlt className="mr-3" />
                Tabbed Content
            </AsideLink>
            <AsideLink href="/calendar">
                <FaCalendar className="mr-3" />
                Calendar
            </AsideLink>
            <AsideLink href="#">
                <FaCogs className="mr-3" />
                Support
            </AsideLink>
            <AsideLink href="#">
                <FaUser className="mr-3" />
                My Account
            </AsideLink>
            <AsideLink href="#">
                <FaSignOutAlt className="mr-3" />
                Sign Out
            </AsideLink>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <FaArrowCircleUp className="mr-3" /> Upgrade to Pro!
            </button>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <FaPlus className="mr-3" /> New Report
            </button>
        </header>
    )
}
