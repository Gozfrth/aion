import { motion } from "framer-motion";
// import Tutorial from "../components/Tutorial";

function Home() {
    return (
        <div className="text-gray-800 font-sans">
            {/* Hero Section */}
            <div className="flex justify-center overflow-hidden">
                <motion.div
                    className="relative w-full h-[70vh] flex justify-center items-center bg-cover bg-center bg-slate-800"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
                >
                    {/* Optional 3D Background */}
                    {/* <Tutorial /> */}

                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    {/* Title */}
                    <motion.h1
                        className="absolute z-10 text-6xl md:text-8xl font-bold text-white drop-shadow-lg"
                        initial={{ y: 20 }}
                        animate={{ y: 40 }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    >
                        AION
                    </motion.h1>
                </motion.div>
            </div>

            {/* Introduction Section */}
            <section className="p-8 md:p-16 bg-white text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">Discover the Future of AI-Driven Technology</h2>
                <p className="mt-4 text-lg md:text-xl text-gray-600">
                    AION is your gateway to a new world of artificial intelligence solutions, from groundbreaking innovations to practical applications that enhance daily life.
                </p>
            </section>

            {/* Articles? */}
            <section className="flex items-center bg-gray-100 h-[60vh] py-16">
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <img src="/path/to/icon1.png" alt="Icon 1" className="mx-auto mb-4 w-16 h-16"/>
                        <h3 className="text-2xl font-semibold text-gray-800">Intelligent Solutions</h3>
                        <p className="mt-2 text-gray-600">
                            Leverage AI to solve complex problems with ease, enhancing decision-making and automating workflows.
                        </p>
                    </div>
                    <div>
                        <img src="/path/to/icon2.png" alt="Icon 2" className="mx-auto mb-4 w-16 h-16"/>
                        <h3 className="text-2xl font-semibold text-gray-800">Real-Time Analytics</h3>
                        <p className="mt-2 text-gray-600">
                            Gain insights in real-time with our cutting-edge analytics powered by machine learning and deep learning.
                        </p>
                    </div>
                    <div>
                        <img src="/path/to/icon3.png" alt="Icon 3" className="mx-auto mb-4 w-16 h-16"/>
                        <h3 className="text-2xl font-semibold text-gray-800">Secure & Reliable</h3>
                        <p className="mt-2 text-gray-600">
                            We prioritize security and reliability, ensuring that our AI solutions integrate seamlessly and safely.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">"AION has transformed our business operations with AI-driven insights. It's a game changer for us."</p>
                            <span className="block mt-4 font-bold text-gray-800">— Sarah J., CEO of TechWave</span>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">"Incredible technology! The real-time analytics help us make better decisions faster."</p>
                            <span className="block mt-4 font-bold text-gray-800">— John K., Head of Analytics at DataCorp</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold">Ready to Elevate Your Business?</h2>
                    <p className="mt-4 text-lg md:text-xl">
                        Discover the power of AI with AION and transform the way you operate.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
