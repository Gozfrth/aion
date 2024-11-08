import SideBarPage from "./pages/SideBarPage";

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    )
}

function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            AION
        </a>
        <SideBarPage />
        <ul>
            <CustomLink href="/price">Pricing</CustomLink>
            <CustomLink href="/about">About</CustomLink>
        </ul>
    </nav>
}

export default NavBar;