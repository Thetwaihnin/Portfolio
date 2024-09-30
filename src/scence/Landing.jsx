import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Profile from "../assets/web/futurism-perspective-digital-nomads-lifestyle_23-2151252489.avif";
import SocialMediaIconss from "../components/SocialMediaIconss";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 pt-10"
    >
      {/* IMAGE SECTION  */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          
          <div
            className="relative z-0 ml-10 before:absolute before:-top-10 before:-left-20
                         before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue
                        before:z-[-1] before:rounded-t-[100px] before:rounded-b-[100px]"
          >
            <img
              src={Profile}
              alt="profile"
              className="hover:filter mt-3 hover:saturate-50 transition duration-500 z-10 w-5/6 rounded-t-[100px] rounded-b-[100px]
                            max-w-[400px] md:max-w-[500px]"
            />
            
          </div>
        ) : (
          <img
            src={Profile}
            alt="profile"
            className="hover:filter rounded-t-[100px] rounded-b-[100px] hover:saturate-200 transition duration-500 w-5/6
                max-w-[300px] md:max-w-[400px]"
          />
        )}
        <div className="relative">
          <div className="absolute border-blue"></div>
        </div>
      </div>
      {/* MAIN SECTION  */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADING  */}
        <motion.div
          onViewportEnter={() => setSelectedPage("home")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Thet Wai Hnin
          </p>
          <p className="mt-10 z-30 mb-10 text-sm text-center md:text-start">
            Hello! I'm Thet Wai Hnin.I'm a Frontend Developer.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="text-deep-blue bg-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-sky-600 transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-blue pr-0.5 py-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-blue transiton duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              My CV
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIconss />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
