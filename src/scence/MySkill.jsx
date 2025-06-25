import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import react from "../assets/web/react-seeklogo.svg";
import php from "../assets/web/php-seeklogo.svg";
import javascript from "../assets/web/javascript-js-seeklogo.svg";
import css from "../assets/web/css3-seeklogo.svg";
import laravel from "../assets/web/laravel-seeklogo.svg";
import html from "../assets/web/html5-with-wordmark-color-seeklogo.svg";
import bootstrap from "../assets/web/bootstrap-5-seeklogo.svg";
import tailwind from "../assets/web/tailwind-css-seeklogo.svg";
import jquery from "../assets/web/jquery-seeklogo.svg";

import useMediaQuery from "../hooks/useMediaQuery";

const MySkill = ({ setSelectedPage }) => {
  // const isAboveMediumScreen = useMediaQuery("(max-width: 1060px)");

  const skillsIcon = [
    { id: 1, src: html, alt: "HTML", label: "HTML" },
    { id: 2, src: css, alt: "CSS3", label: "CSS3" },
    { id: 3, src: javascript, alt: "JavaScript", label: "JavaScript" },
    { id: 4, src: jquery, alt: "jQuery", label: "jQuery" },
    { id: 5, src: react, alt: "React", label: "React" },
    { id: 6, src: php, alt: "PHP", label: "PHP" },
    { id: 7, src: laravel, alt: "Laravel", label: "Laravel" },
    { id: 8, src: bootstrap, alt: "Bootstrap", label: "Bootstrap" },
    { id: 9, src: tailwind, alt: "Tailwind", label: "Tailwind" },
  ];

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
            <div className="text-center">
              <p className="font-playfair font-bold text-4xl mb-5">My Skills</p>
            </div>
            <LineGradient width="" />
            <div className="mt-10 mb-7">
              <div className="text-lg font-bold text-center">
                <p>Specialized in</p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {skillsIcon.map((icon, i) => (
                  <div
                    key={`${icon.id}-${i}`}
                    className="flex flex-col items-center  p-4 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-12 h-12 icons rounded-lg mb-2"
                    />
                    <span className="text-white text-sm">{icon.label}</span>
                  </div>
                ))}
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
                <div className="font-playfair  p-3 bg-black font-semibold text-5xl text-black"></div>
                <p
                  className="font-playfair text-center font-semibold md:text-2xl mt-3"
                  id="box"
                >
                  Project-Based Experience
                </p>
              </div>
              {/* {
                isAboveMediumScreen ? (
                  <div></div>
                ): (
                  <div className="w-1/2 md:w-3/4 rounded h-32 bg-cyan-600  absolute right-0 top-0 z-[-1]" />
                )
              } */}
            </div>

            <p className="mt-10">
              <h4 className="mb-4">React Developer – Personal Projects</h4>
               I’ve been
              building personal projects to grow my skills in front-end
              development, focusing on React.js, TypeScript, and Tailwind CSS.
              My work includes designing and developing interactive UIs like a
              flower gallery with filtering and animations, a Twitter-inspired
              layout, and a Converse product page clone. These projects helped
              me understand responsive design, component reuseability, and real-world
              development practices such as version control with Git and GitHub.
              I'm actively exploring JavaScript fundamentals and React ecosystem
              tools as I prepare to take on professional development roles
            </p>
          </motion.div>
        </div>
      </section>
      <LineGradient />
    </>
  );
};

export default MySkill;
