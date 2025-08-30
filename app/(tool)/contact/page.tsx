import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { SiGmail } from "react-icons/si"


export default function ContactUsPage() {
    return (
        <div className="flex items-center pt-50 justify-center">
        <div className="text-justify">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-center">Contact Me</h1>
            <p className="text-lg text-gray-700">I'd love to hear from you! Please reach out with any questions or feedback.</p>
            <p className="text-md text-gray-700 pt-5">Email: vir.cabahug1@gmail.com</p>
        </div>
        </div>
    )
}