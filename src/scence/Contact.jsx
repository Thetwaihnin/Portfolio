import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Blue from "../assets/png/blue.jpg";
import characterImage from "../assets/png/helpline_3588761.png";

const Contact = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="py-16 flex justify-center items-center min-h-screen bg-black "
      
    >
      <div className="w-[90%] md:w-[80%] bg-cover bg-center" style={{ backgroundImage: `url(${Blue})` }}> 
        <motion.div
          className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8"
          onViewportEnter={() => setSelectedPage("contact")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* Title & Image (Visible on all devices, side-by-side on mobile) */}
          <div className="flex items-center justify-center gap-3 md:flex-col md:w-1/2">
            <img
              src={characterImage}
              alt="Contact Icon"
              className="w-12 sm:w-16 md:w-32 h-auto"
            />
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white text-center">
              GET IN <span className="text-cyan-400">TOUCH</span>
            </h2>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form
              method="POST"
              target="_blank"
              action="https://formsubmit.co/thetwaihninsone@gmail.com"
              onSubmit={onSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="NAME"
                className="w-full text-white bg-white/10 border border-cyan-500 rounded-lg p-3 placeholder-white/70 focus:outline-none"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-red-400 text-sm">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}

              <input
                type="email"
                placeholder="EMAIL"
                className="w-full text-white bg-white/10 border border-cyan-500 rounded-lg p-3 placeholder-white/70 focus:outline-none"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" &&
                    "Invalid email address."}
                </p>
              )}

              <textarea
                rows="4"
                placeholder="MESSAGE"
                className="w-full text-white bg-white/10 border border-cyan-500 rounded-lg p-3 placeholder-white/70 focus:outline-none resize-none"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className=" shadow-blue-glow text-blue-200 font-semibold px-4 py-2  hover:bg-orange-400 rounded-md bg-blue hover:text-white transition duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
