import React, { useState } from "react";
import { 
    GoHome,
    GoPeople,
    GoBook,
    GoCalendar,
    GoRead,
    GoTab,
} from "react-icons/go";

import { motion } from "framer-motion";
import Link from "./Link";
import { hover } from "@testing-library/user-event/dist/hover";

export const Example = () => {
    return (
        <div className="flex bg-indigo-50">
            <Sidebar />
            <ExampleContent />
        </div>
    );
};

const Sidebar = () => {
    const links = [
        { label: 'HOME', path: '/', Icon: GoHome },
        { label: 'ABOUT', path: '/about', Icon: GoPeople },
        { label: 'EVENTS', path: '/events', Icon: GoCalendar },
        { label: 'ARTICLES', path: '/articles', Icon: GoBook },
        { label: 'CONTACT', path: '/contact', Icon: GoRead },
    ];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Home");

    const renderedLinks = links.map((link) => {
        return (
            <Link key={link.label} to={link.path}>
                <Option
                    Icon={link.Icon}
                    title={link.label}
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    setOpen={setOpen} // Pass setOpen to Option
                />
            </Link>
        );
    });

    return (
        <motion.nav
            layout
            className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-slate-950 p-2"
            initial={{ width: "60px", opacity: 1 }}
            animate={{ width: open ? "175px" : "56px", opacity: 1 }}
            transition={{
                duration: 0.4, 
                ease: "easeInOut",
            }}
            onMouseEnter={() => setOpen(true)}   // Expand sidebar on hover
            onMouseLeave={() => setOpen(false)}  // Collapse sidebar when mouse leaves
        >
            <TitleSection open={open} />

            <div className="space-y-2">
                {renderedLinks}
            </div>
        </motion.nav>
    );
};

const Option = ({ Icon, title, selected, setSelected, open, setOpen, notifs }) => {
    return (
        <button
            onClick={() => {
                setSelected(title);
                setOpen(false); // Close sidebar when an option is selected
            }}
            className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-200 hover:bg-gray-300 hover:text-black "}`}
        >
            <div className="grid h-full w-10 place-content-center text-lg hover:black">
                <Icon color={`${selected === title ? "black" : "white"}`} />
            </div>

            {open && (
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125 }}
                    className="text-xs font-medium"
                >
                    {title}
                </motion.span>
            )}

            {notifs && open && (
                <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ y: "-50%" }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
                >
                    {notifs}
                </motion.span>
            )}
        </button>
    );
};

const TitleSection = ({ open }) => {
    return (
        <div className="mb-3 border-b border-slate-300 pb-3">
            <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-700 hover:text-black">
                <div className="flex items-center gap-2">
                    <Logo />
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.125 }}
                        >
                            <span className="block text-l font-semibold text-white">AION</span>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Logo = () => {
    return (
        <div className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600">
            <svg
                width="24"
                height="auto"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50"
            >
                <path
                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                ></path>
                <path
                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                ></path>
            </svg>
        </div>
    );
};

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;

export default Sidebar;