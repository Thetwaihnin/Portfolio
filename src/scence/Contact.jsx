import { useForm } from "react-hook-form";
// import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
   
    <section id="contact" className="py-10 flex justify-center">
      <div className="w-[90%] md:w-[80%]">
        <motion.div
          className="bg-cyan-600 opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-lg md:flex"
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
          <div className="md:hidden mb-6">
            <h2 className="font-playfair text-3xl font-bold text-center text-white">
              CONTACT <span className="text-blue">ME</span>
            </h2>
          </div>

          {/* Left side: Heading (only shown on md and up) */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <h2 className="font-playfair text-4xl font-bold text-center text-white">
              CONTACT <span className="text-blue">ME</span>
            </h2>
          </div>

          {/* Right side: Form (full width on mobile, half on desktop) */}
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
                className="w-full text-black bg-white/80 rounded-lg p-3"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-red text-sm">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                type="email"
                placeholder="EMAIL"
                className="w-full text-black bg-white/80 rounded-lg p-3"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red text-sm">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                rows="4"
                placeholder="MESSAGE"
                className="w-full text-black bg-white/80 rounded-lg p-3"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="text-red text-sm">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="bg-blue text-deep-blue font-semibold px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300"
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
