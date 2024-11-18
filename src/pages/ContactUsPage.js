import { FaInstagram, FaTwitter, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

function ContactUsPage() {
    return (
        <div className="flex flex-col h-screen bg-slate-950 items-center">
            <h1 className="text-6xl mb-6 text-slate-200 mt-10">Contact Us</h1>

            <div className="flex space-x-6">
                <a
                    href="https://www.instagram.com/aion.rit/profilecard/?igsh=aHU0NGxiOGE3dWY4YOUR_INSTAGRAM_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-xl transition-transform transform text-slate-200 hover:scale-125 hover:text-blue-500"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://x.com/Aion_Rit?t=OcBT3RjN3yY6nmV10iI8Xw&s=08OUR_TWITTER_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-xl transition-transform transform text-slate-200 hover:scale-125 hover:text-blue-400"
                >
                    <FaTwitter />
                </a>
                <a
                    href="YOUR_LINKEDIN_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-xl transition-transform transform text-slate-200 hover:scale-125 hover:text-blue-700"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="YOUR_TELEGRAM_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="text-xl transition-transform transform text-slate-200 hover:scale-125 hover:text-blue-600"
                >
                    <FaTelegram />
                </a>
                <a
                    href="YOUR_GITHUB_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-xl transition-transform transform text-slate-200 hover:scale-125 hover:text-blue-700"
                >
                    <FaGithub />
                </a>
            </div>

            <p className="text-white m-10">Send us a message!</p>

            <form className="flex flex-col items-center space-y-6 w-2/3">
                <div className="flex w-full space-x-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border rounded-lg w-1/2 h-[60px] p-4 bg-slate-200"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border rounded-lg w-1/2 h-[60px] p-4 bg-slate-200"
                        required
                    />
                </div>

                <div className="w-full">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-lg w-full h-[60px] p-4 bg-slate-200"
                        required
                    />
                </div>

                <div className="w-full">
                    <textarea
                        placeholder="Send us queries/feedback"
                        className="border rounded-lg w-full h-[160px] p-4 bg-slate-200"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactUsPage;