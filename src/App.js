import { useEffect, useState } from "react";
import Route from "./components/Route";
import Sidebar from "./components/SidebarTute";
import SidebarMobile from "./components/SidebarTute";
import AboutUsPage from "./pages/AboutUsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ContactUsPage from "./pages/ContactUsPage";
import EventsPage from "./pages/EventsPage";
import Home from "./pages/Home";

import { IconContext } from "react-icons";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Set breakpoint at 768px
        };
        console.log(isMobile);

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    return (
        // <div className="bg-slate-950"></div>
        <div className="flex">
            <IconContext.Provider value={{ color: "black" }}>
                <div className="fixed top-0 left-0 h-full bg-white z-10">
                    <Sidebar mobile={isMobile}/>
                </div>
            </IconContext.Provider>
            <div className="absolute w-full">
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <AboutUsPage />
                </Route>
                <Route path="/events">
                    <EventsPage />
                </Route>
                <Route path="/articles">
                    <ArticlesPage />
                </Route>
                <Route path="/contact">
                    <ContactUsPage />
                </Route>
            </div>
        </div>
    );
}

export default App;
