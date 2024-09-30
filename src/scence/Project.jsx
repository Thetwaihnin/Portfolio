import { motion } from "framer-motion"
import LineGradient from "../components/LineGradient"
import Project1 from "../assets/web/converseSite.png"
import Project2 from "../assets/web/Screenshot (48).png"
import Project3 from "../assets/web/Screenshot (51).png"
import Project4 from "../assets/project-4.jpeg"
import Project5 from "../assets/project-5.jpeg"
import Project6 from "../assets/project-6.jpeg"
import Project7 from "../assets/project-7.jpeg"

const projectImages = {
  "Project1": Project1,
  "Project2": Project2, 
  "Project3": Project3,
  "Project4": Project4,
  "Project5": Project5,
  "Project6": Project6,
  "Project7": Project7
};

const projectDescription = {
  "Des1" : "E-commerce clone website of converse developed using React,Typescript and Tailwind.",
  "Des2" : "hejio store website cloning from the official website written with React.js and typescript",
  "Des3" : "Full Stack E-commerce website using Laravel,ajax.",
  "Des4" : "Converse store website cloning from the official website written with React.js and typescript",
  "Des5" : "Converse store website cloning from the official website written with React.js and typescript",
  "Des6" : "Converse store website cloning from the official website written with React.js and typescript",
  "Des7" : "Converse store website cloning from the official website written with React.js and typescript",
} 

const sourceCode = {
  "source1" : "https:://ftyfhgvfhfyfggyjftrse",
  "source2" : "https:://",
  "source3" : "https:://",
  "source4" : "https:://",
  "source5" : "https:://",
  "source6" : "https:://",
  "source7" : "https:://",
  "source8" : "https:://",
}


const container = {
  hidden : {},
  visible : {
    transition: {staggerChildren: 0.2}
  }
}

const projectVariants = {
  hidden: {opacity : 0, scale : 0.8},
  visible : { opacity: 1, scale : 1}
}

const Projects = ({ title,description,source })=> {
  const overlayStyle = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-black z-30 flex flex-col justify-center items-center text-center p-16 text-blue`

  const projectImage = projectImages[title] || Project1;
  const des = projectDescription[description];
  const soc = sourceCode[source];
  console.log(projectImages[title]);
  
  return (
    <motion.div className="relative" variants={projectVariants}>
      <div className={overlayStyle}>
        <p className="text-2xl  font-playfair">{title}</p>
        <p className="mt-7">
         {des}
        </p>
        
        <div className="mt-3">
         source code-
        <div className=" text-blue">
          <a href={soc}>{soc}</a>
        </div>
        </div>
      </div> 
      <img src={projectImage} alt={title} className="h-[400px] w-full overflow-hidden" />

    </motion.div>
  )
}

const Project = ({setSelectedPage}) => {
  return (
    <section id="projects" className="pt-32 pb-48">
        {/* HEADING  */}
        <motion.div 
          onViewportEnter={() => setSelectedPage('projects')}
          className="md:w-2/4 mx-auto text-center"
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
              <p className="font-playfair font-semibold text-4xl">
                <span className="text-red">SOME OF </span>MY WORKS
              </p>
              <div className="flex justify-center mt-5">
                <LineGradient width="w-4/6"/>
              </div>
          </div>
          <p className="mt-10 mb-10">
          Projects below are some of my own works and some from the courses I took. 
          </p>
        </motion.div>

          {/* PROJECTS  */}
          <div className="flex justify-center">
            <motion.div 
            onViewportEnter={() => setSelectedPage('projects')}
            className="sm:grid sm:grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            >
              
              <Projects title="Project1" description="Des1" source="source1"/>
              <Projects title="Project2" description="Des2"/>

              {/* ROW TWO  */}
              <Projects title="Project3" description="Des3"/>
              <Projects title="Project4" description="Des4"/>
              <Projects title="Project5" description="Des5"/>

              {/* ROW THREE  */}
              <Projects title="Project6" description="Des6"/>
              <Projects title="Project7" description="Des7"/>

              
            </motion.div>
          </div>
    </section>
  )
}

export default Project