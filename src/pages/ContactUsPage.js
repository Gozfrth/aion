import { FaInstagram, FaTwitter, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

function ContactUsPage() {
    return (
        <div className="flex flex-col h-screen bg-slate-950 items-center">
            <h1 className="text-6xl mb-6 text-slate-200 mt-10">Contact Us</h1>


            <div className="flex space-x-6">
                <a
                    href="https://www.instagram.com/aion.rit/profilecard/?igsh=aHU0NGxiOGE3dWY4YOUR_INSTAGRAM_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl transition-transform transform text-slate-200 hover:scale-110 hover:text-blue-500"
                >
                    <FaInstagram />
                </a>
                <a
                    href="Yhttps://x.com/Aion_Rit?t=OcBT3RjN3yY6nmV10iI8Xw&s=08OUR_TWITTER_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl transition-transform transform text-slate-200 hover:scale-110 hover:text-blue-400"
                >
                    <FaTwitter />
                </a>
                <a
                    href="YOUR_LINKEDIN_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl transition-transform transform text-slate-200 hover:scale-110 hover:text-blue-700"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="YOUR_TELEGRAM_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl transition-transform transform text-slate-200 hover:scale-110 hover:text-blue-600"
                >
                    <FaTelegram />
                </a>
                <a
                    href="YOUR_GITHUB_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl transition-transform transform text-slate-200 hover:scale-110 hover:text-blue-700"
                >
                    <FaGithub />
                </a>
            </div>
            <p className="text-lg m-10">Send us a message!</p>
            <form className="flex flex-col items-center space-y-6 w-full">
                <div className="flex w-2/3 space-x-6">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border rounded-lg w-1/2 h-[60px] p-4"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border rounded-lg w-1/2 h-[60px] p-4"
                    />
                </div>

                <div className="w-2/3">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-lg w-full h-[60px] p-4"
                    />
                </div>

                <div className="w-2/3">
                    <textarea
                        placeholder="Send us queries/feedback"
                        className="border rounded-lg w-full h-[160px] p-4"
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