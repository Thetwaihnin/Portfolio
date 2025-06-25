import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Project2 from "../assets/web/Screenshot (48).png";
import GameProject from "../assets/Gaming.png";
import Project5 from "../assets/Screenshot (18).png";
import Project1 from "../assets/web/converseSite.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectData = [
  {
    title: "Gaming Website",
    description: "Award Gaming Website",
    image: GameProject,
    source: "https://github.com/Thetwaihnin/Gaming-Web.git",
    demo: "https://astounding-lamington-367179.netlify.app/"
  },
  {
    title: "Converse Website",
    description:
      "Designed and built a fully responsive Converse website using React,TypeScript and Tailwind CSS. Implemented REact Router to crate a multi-page experience  with routes.",
    image: Project1,
    source: "https://github.com/Thetwaihnin/converse-store-app.git",
  },
  {
    title: "Gym Website (React + Tailwind CSS)",
    description:
      "Developed a responsive gym fitness website using React.js and Tailwind CSS. I followed a Youtube tutorial for guidance and enhanced the project.",
    image: Project2,
    source: "https://github.com/Thetwaihnin/gym-app-react.git",
  },

  {
    title: "Twitter Clone",
    description: "Responsive twitter clone",
    image: Project5,
    source: "https://github.com/Thetwaihnin/Twitter-clone.git",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = ({ title, description, source, image }) => {
  const overlayStyle = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
  md:backdrop-blur-md bg-black text-blue z-30 flex flex-col justify-center rounded hover:scale-105 items-center text-wrap md:text-black text-center py-8 px-2`;

  return (
    <motion.div
      className="relative hover:scale-105 overflow-hidden border-zinc-400 rounded border-[3px] shadow"
      variants={projectVariants}
    >
      <div className={overlayStyle}>
        <div className="">
          <p className="text-2xl text-slate-400 font-playfair">{title}</p>
          <div className="mt-7 text-wrap w-auto text-slate-400">
            <p>{description}</p>
          </div>

          <div className="mt-3 text-wrap">
            <div className="flex justify-center gap-3">
              <a href={source} className=" ">
                <button className="px-4 rounded bg-gray-500 py-2 hover:bg-blue hover:text-black">
                  Source
                </button>
              </a>

              <a
                href="https://astounding-lamington-367179.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                 <button className="px-4 rounded bg-gray-500 py-2 hover:bg-red hover:text-black">
                  Live Demo {""}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        id="project"
        src={image}
        alt={title}
        className="h-[350px] sm:h-[400px] lg:h-full object-cover w-full "
      />
    </motion.div>
  );
};

// const Projects = ({ title, description, source, image }) => {
//   return (
//     <motion.div
//       className="bg-black rounded-xl overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300 flex flex-col"
//       variants={projectVariants}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="h-[300px] w-full object-cover"
//       />

//       {/* Content */}
//       <div className="flex-1 flex flex-col justify-between p-4 text-center">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

//           <div className="flex flex-wrap justify-center gap-2 mb-2">
//             {title.includes("React") && (
//               <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">React</span>
//             )}
//             {title.includes("Tailwind") && (
//               <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Tailwind CSS</span>
//             )}
//             {title.includes("TypeScript") && (
//               <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">TypeScript</span>
//             )}
//           </div>

//           <p className="text-sm text-gray-600">{description}</p>
//         </div>

//         {/* Buttons */}
//         <div className="mt-4 flex justify-center gap-3">
//           <a
//             href={source}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="px-4 py-2 text-sm bg-blue-600 text-red rounded hover:bg-cyan-400 transition-colors">
//       Source Code
//     </button>
//           </a>
//           {/* Optional: Add live demo if you have */}
//           {/* <a href="https://your-demo-link.com" target="_blank" rel="noopener noreferrer">
//             <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
//               Live Demo
//             </button>
//           </a> */}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const Project = ({ setSelectedPage }) => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section id="projects" className="pt-32 pb-48">
      {/* HEADING  */}
      <motion.div
        onViewportEnter={() => setSelectedPage("projects")}
        className="sm:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className=" font-serif font-semibold text-4xl">
            <span className="">THE PROJECTS </span>I'VE BUILT
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-4/6" />
          </div>
        </div>
        <p className="mt-10 mb-10 ">
          Here are a few of the projects I've worked on.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          onViewportEnter={() => setSelectedPage("projects")}
          className="hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {projectData.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </motion.div>

        <motion.div
          onViewportEnter={() => setSelectedPage("projects")}
          className="block md:hidden w-full px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <Slider {...settings}>
            {projectData.map((project, index) => (
              <div key={`${project.title}-${index}`} className="h-[450px] px-2">
                <Projects {...project} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
