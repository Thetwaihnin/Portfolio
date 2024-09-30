import { useForm } from "react-hook-form";
// import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = ({setSelectedPage}) => {
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
    <section id="contact" className="py-10">
      {/* HEADING  */}
      <motion.div
        onViewportEnter={() => setSelectedPage('contact')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold md:text-4xl text-2xl mx-auto md:flex justify-center">
            <span className="text-blue mr-2">CONTACT ME </span>TO GET STARTED
          </p>
        </div>
      </motion.div>

      {/* FORM  */}
      <div className="sm:justify-center flex">
        <motion.div
          className="md:basis-1/2 mt-24 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form 
            method="POST" 
            className=" pl-12 py-12"
            target="_blank" 
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              className="w-full text-black font-semibold placeholder-opaque-black p-3 flex flex-col"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              type="email"
              className="w-full text-black font-semibold placeholder-opaque-black p-3 mt-5 flex flex-col"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              rows="4"
              cols="50"
              type="text"
              className="w-full text-black font-semibold placeholder-opaque-black p-3 mt-5 flex flex-col"
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "pattern" && "Max length is 2000 char."}
              </p>
            )}

            <button 
              type="submit"
              className="p-5 bg-blue font-semibold flex flex-col text-deep-blue mt-5 hover:bg-red
              hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
