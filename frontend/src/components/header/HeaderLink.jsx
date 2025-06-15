import { NavLink, useLocation } from "react-router-dom";

const HeaderLink = ({ children, url = "/" }) => {
    const { pathname } = useLocation();
    return (
        <NavLink
            className={
                pathname === url
                    ? "text-yellow-400 underline underline-offset-4"
                    : ""
            }
            to={url}
        >
            {children}
        </NavLink>
    );
};

export default HeaderLink;
