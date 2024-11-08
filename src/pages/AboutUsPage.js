import { motion } from "framer-motion";
import CardContainer from "../components/CardContainer";
// import Tutorial from "../components/Tutorial";

function Home() {
    return (
        <div className="text-gray-300 font-sans">
            {/* Hero Section */}
            <div className="flex justify-center overflow-hidden">
                <div className="relative w-full h-[50vh] flex justify-center bg-slate-950 bg-cover bg-center">
                    {/* Background Video */}

                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950 opacity-40"></div>

                    {/* Title */}
                    <motion.h1
                        className="absolute z-10 md:text-9xl font-bold text-white drop-shadow-lg"
                        initial={{ y: 40 }}
                        animate={{ y: 100 }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                    >
                        About Us
                    </motion.h1>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="p-8 md:p-16 bg-slate-950 text-center">
                <p className="p-20 text-lg text-justify w-1/2 md:text-xl text-gray-300">
                AION is the go-to hub for AI/ML enthusiasts at Ramaiah Institute of Technology. Born from the realization that many students are eager but lack direction, we bridge the gap between beginners and experienced seniors who are ready to share their expertise. Our club sparks a culture of innovation by empowering members with hands-on skills through engaging workshops, mentorship, and community-driven learning. We host dynamic events to inspire and equip students for their AI/ML journey.
                </p>
            </section>

            {/* Articles Section */}
            <section className="bg-slate-950 py-16 bg-gradient-to-b from-transparent to-blue-800">
                <div className="max-w-6xl mx-auto px-8 text-center mt-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-8">Articles & Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 drop-shadow-lg pt-20 pb-20">
                        <CardContainer/>
                        {/* <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800">Introduction to Machine Learning</h3>
                            <p className="mt-2 text-gray-600">
                                Learn the basics of machine learning, including key concepts, algorithms, and practical applications.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800">Deep Learning with Neural Networks</h3>
                            <p className="mt-2 text-gray-600">
                                Dive into deep learning and neural networks, the backbone of many modern AI applications.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800">AI Ethics & Society</h3>
                            <p className="mt-2 text-gray-600">
                                Explore the ethical implications of AI and the impact it has on society. Understand the importance of responsible AI.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">What Our Members Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">"Joining the AI & ML Club helped me gain hands-on experience and deepen my understanding of AI. The workshops and projects have been amazing!"</p>
                            <span className="block mt-4 font-bold text-gray-800">— Alex M., Computer Science Student</span>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">"Being part of this community has sparked my interest in machine learning. The mentors and resources are top-notch!"</p>
                            <span className="block mt-4 font-bold text-gray-800">— Priya S., Engineering Student</span>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Call to Action Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold">Ready to Start Your AI Journey?</h2>
                    <p className="mt-4 text-lg md:text-xl">
                        Join the AI & ML Club today and start building the future with us.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
                        Become a Member
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
