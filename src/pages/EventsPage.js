import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

function EventsPage() {
    const events = [
        {
            title: "AI Roadmap Workshop",
            date: "December, 2024",
            time: "TBA",
            location: "TBA",
            description: "Join us for an in-depth workshop that will guide you through the complete AI roadmap. From beginner concepts to advanced machine learning techniques, we’ll provide the tools and knowledge you need to start your journey in AI.",
            status: "Upcoming",
        },
        {
            title: "Kaggle Competition",
            date: "February, 2024",
            time: "TBA",
            location: "TBA",
            description: "Test your machine learning skills in our Kaggle-style competition! Compete with fellow students to build the best models and solve real-world data science problems. Great prizes await the top teams.",
            status: "Upcoming",
        },
        {
            title: "AI Week",
            date: "March, 2025",
            time: "TBA",
            location: "TBA",
            description: "AI Week is a week-long event where students, professionals, and AI enthusiasts come together to explore the latest advancements in AI. Join workshops, panel discussions, and networking events to dive deep into the future of AI and machine learning.",
            status: "In Progress",
        },
    ];

    return (
        <div className="text-gray-300 font-sans">
            <div className="relative w-full h-[70vh] flex bg-black bg-cover">
                {/* Title Section */}
                <div className="w-1/2 flex items-center justify-center pl-40 bg-black">
                    <motion.h1
                        className="text-9xl font-bold text-white drop-shadow-lg"
                        initial={{ y: -100 }}
                        animate={{ y: -80 }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                    >
                        UPCOMING EVENTS
                    </motion.h1>
                </div>

                {/* Video Section */}
                <div className="w-1/2 relative h-full flex items-center justify-center p-40">
                    {/* Background Video */}
                    <img
                        className="w-full h-full object-cover"
                        src="../../videos/phineas.gif"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>


            <section className="p-8 md:p-16 bg-gradient-to-b from-black to-gray-950 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-300">
                    Join Us for Exciting Events
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    We have a variety of events lined up to help you gain hands-on experience, learn from experts, and network with like-minded individuals.
                </p>
            </section>

            <section className="bg-slate-950 py-16 bg-gradient-to-b from-transparent to-blue-800">
                <div className="max-w-6xl mx-auto px-8 text-center mt-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-8">Upcoming & Ongoing Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 pb-20">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-gray-950 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <h3 className="text-xl font-semibold text-blue-300">{event.title}</h3>
                                <p className="text-lg text-gray-300 mt-4">{event.description}</p>
                                <div className="mt-6 flex items-center text-gray-300">
                                    <FiCalendar className="mr-2" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="mt-2 flex items-center text-gray-300">
                                    <FiClock className="mr-2" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="mt-2 flex items-center text-gray-300">
                                    <FiMapPin className="mr-2" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className={`${event.status === "Upcoming"
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : event.status === "In Progress"
                                                ? "bg-yellow-500 hover:bg-yellow-600"
                                                : "bg-gray-500 hover:bg-gray-600"
                                            } px-8 py-4 text-white font-semibold rounded-full transition duration-300`}
                                    >
                                        {event.status === "Upcoming"
                                            ? "Register Now"
                                            : event.status === "In Progress"
                                                ? "Join Event"
                                                : "Event Completed"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-blue-800 text-white py-16 pb-20">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Don't Miss Out on Our Events!
                    </h2>
                    <p className="mt-4 text-lg md:text-xl">
                        Be sure to mark your calendar and stay updated on our upcoming events. We look forward to seeing you there!
                    </p>
                    <button className="mt-8 px-8 py-4 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
                        View More Events
                    </button>
                </div>
            </section>
        </div>
    );
}

export default EventsPage;
