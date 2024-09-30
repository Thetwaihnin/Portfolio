import SocialMediaIconss from "../components/SocialMediaIconss"

const Footer = ({setSelectedPage}) => {
  return (
    <footer className="h-64 w-full bg-indigo-500 pt-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIconss/>
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold txt-2xl txt-ywllow ">THET WAI HNIN</p>
                <p className="font-playfair txt-md ">All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer