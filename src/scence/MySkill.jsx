import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import react from "../assets/web/react-seeklogo.svg";
import php from "../assets/web/php-seeklogo.svg"
import javascript from "../assets/web/javascript-js-seeklogo.svg"
import css from "../assets/web/css3-seeklogo.svg"
import laravel from "../assets/web/laravel-seeklogo.svg"
import html from "../assets/web/html5-with-wordmark-color-seeklogo.svg"
import bootstrap from "../assets/web/bootstrap-5-seeklogo.svg"
import tailwind from "../assets/web/tailwind-css-seeklogo.svg"
import jquery from "../assets/web/jquery-seeklogo.svg"



// import useMediaQuery from "../hooks/useMediaQuery";
// import Skill from "../assets/web/woman-working-new-app_23-2148682102.avif";

const MySkill = ({ setSelectedPage }) => {
  // const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      <section id="skill" className="pt-10 pb-24 ">
        {/* HEADER AND IMAGE  */}
        <div className="md:flex md:justify-evenly md:gap-16 mt-16 ml-6">
          <motion.div
            onViewportEnter={() => setSelectedPage("skill")}
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="sm:w-2/3" />
            <div className="mt-10 mb-7">
              <div className="text-lg font-bold">Specialized In</div>
              <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="mb-2">
                  <img src={html} alt="html" className=" w-10 h-10" />
                  <div>HTML</div>
                </div>
                <div className="mb-2">
                  <img src={css} alt="css" className=" w-10 h-10" />
                  <div>CSS3</div>
                </div>

                <div className="mb-2">
                  <img src={javascript} alt="javascript" className=" w-10 h-10" />
                  <div>Javascript</div>
                </div>
      
                <div className="mb-2">
                  <img src={jquery} alt="jquery" className=" w-10 h-10" />
                  <div>jQuery</div>
                </div>
                <div className="mb-2">
                  <img src={react} alt="react" className=" w-10 h-10" />
                  <div>React</div>
                </div>
                <div className="mb-2">
                  <img src={php} alt="php" className=" w-10 h-10" />
                  <div>PHP</div>
                </div>
                
                <div className="mb-2">
                  <img src={laravel} alt="laravel" className=" w-10 h-10" />
                  <div>Laravel</div>
                </div>
                <div className="mb-2 ">
                  <img src={bootstrap} alt="bootstrap" className=" w-10 h-10" />
                  <div className="">Bootstrap</div>
                </div>
                <div className="mb-2">
                  <img src={tailwind} alt="tailwind" className=" w-10 h-10" />
                  <div>Tailwind</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-18 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <div className="font-playfair p-3 bg-black font-semibold text-5xl text-black"></div>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  Experience
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-indigo-500 absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-10">
              I have no professional working experience but I'm very passionate
              about programming and I've developed websites like e-commerce and
              blogs form the courses I took and I also developed e-commerce
              websites even tho I did have many difficulties.
            </p>
          </motion.div>
        </div>
      </section>
      <LineGradient />
    </>
  );
};

export default MySkill;
