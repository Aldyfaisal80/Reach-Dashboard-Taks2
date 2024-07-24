import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AsideLink({ href, children }) {
    const location = useLocation();
    const isActive = location.pathname === href;
    return (
        <Link
            to={href}
            className={`flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`}
        >
            {children}
        </Link>
    )
}
