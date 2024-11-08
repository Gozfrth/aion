import { motion } from "framer-motion";
// import Tutorial from "../components/Tutorial";

function Home() {
    return (
        <div>
        <div className="flex justify-center overflow-hidden">
            {/* Container for the background image and title with 60% height */}
            <motion.div
                className="relative w-full h-[60vh] flex justify-center bg-cover bg-center"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
            >
                {/* Overlay to darken background slightly for text readability */}
                {/* <Tutorial /> */}

                {/* Title text with slight motion */}
            </motion.div>
            <motion.h1
                className="absolute z-10 text-6xl font-bold"
                initial={{ y: 20 }}
                animate={{ y: 40 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                AION
            </motion.h1>
        </div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
    );
}

export default Home;
