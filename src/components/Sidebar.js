import Link from "./Link";

function Sidebar() {
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Events', path: '/events' },
        { label: 'News', path: '/news' },
        // { label: 'Table', path:'/table' },
        // { label: '3d', path:'/3d' },
        // { label: 'counter', path:'/counter' },
    ];

    const renderedLinks = links.map((link) => {
        return <Link 
        key={link.label} 
        to={link.path} 
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}
        </Link>
    })

    return(
        <div className="sticky top-0 overflow-hidden flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;