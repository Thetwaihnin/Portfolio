import Linkedin from "../assets/linkedin.png"
import Facebook from "../assets/facebook.png"
import Insta from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"

const SocialMediaIconss = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a 
            href="https://www.linkedin.com/in/thet-wai-hnin-289b90228?utm_source=share&urm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:opacity-50 transition duration-500"
            target="_blank"
            rel="noreferrer"
        >
            <img src={Linkedin} alt="linkedin-link" />
        </a>
        <a 
            href="https://www.twitter.com"
            className="hover:opacity-50 transition duration-500"
            target="_blank"
            rel="noreferrer"
        >
            <img src={Twitter} alt="twitter-link" />
        </a>
        <a 
            href="https://www.facebook.com"
            className="hover:opacity-50 transition duration-500"
            target="_blank"
            rel="noreferrer"
        >
            <img src={Facebook} alt="facebook-link" />
        </a>
        <a 
            href="https://www.instagram.com"
            className="hover:opacity-50 transition duration-500"
            target="_blank"
            rel="noreferrer"
        >
            <img src={Insta} alt="insta-link" />
        </a>
    </div>
  )
}

export default SocialMediaIconss