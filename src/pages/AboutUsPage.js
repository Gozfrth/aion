import { motion } from "framer-motion";
import CardContainer from "../components/CardContainer";
// import Tutorial from "../components/Tutorial";

function AboutUsPage() {
    return (
        <div className="text-gray-300 font-sans">
            {/* Hero Section */}
            <div className="flex justify-center overflow-hidden">
                <div className="relative w-full h-[48vh] flex justify-center bg-slate-950 bg-cover bg-center">
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
            <section className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-slate-950 text-center md:text-left">
                <div className="flex-1 p-4 md:pr-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who We Are</h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        AION is the go-to hub for AI/ML enthusiasts at Ramaiah Institute of Technology.
                        Born from the realization that many students are eager but lack direction,
                        we bridge the gap between beginners and experienced mentors who are ready to share their expertise.
                        Our club fosters a culture of innovation, empowering members with hands-on skills through workshops,
                        mentorship, and community-driven learning. We strive to inspire and equip students for their AI/ML journey.
                    </p>
                </div>
                <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                    <img className="rounded-lg opacity-80 border" src="../../images/team_presenting.jpg" alt="AION Team Presenting" />
                </div>
            </section>

            {/* Vision Section */}
            <section className="p-8 md:p-16 bg-gradient-to-b from-slate-950 to-slate-900 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    At AION, we envision a world where AI and ML are not just specialized fields but essential tools
                    for every engineer and innovator. Our vision is to make cutting-edge knowledge accessible to all,
                    turning complex AI/ML concepts into actionable skills for real-world problem-solving.
                    We aim to cultivate a generation of tech-savvy students who are well-equipped to
                    contribute to the AI-driven future.
                </p>
            </section>


        </div>
    );
}


export default AboutUsPage;
