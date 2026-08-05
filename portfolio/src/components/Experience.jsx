import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-black text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px] rounded-full"></div>

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.45em] text-blue-500 text-sm font-semibold">
            EXPERIENCE
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            My Journey
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            My MERN Stack training experience, hands-on projects,
            and continuous learning journey.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300"
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-2xl bg-blue-600/20 flex items-center justify-center text-4xl text-blue-500">
                <FaBriefcase />
              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  MERN Stack Development Training
                </h3>

                <p className="text-blue-400 mt-2">
                  Zoople Technologies
                </p>

                <p className="text-zinc-500 mt-1">
                  February 2026 – March 2026
                </p>

              </div>

            </div>

            <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 w-fit">
              Completed
            </span>

          </div>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">

              <FaCode className="text-blue-500 mt-1 text-xl" />

              <p className="text-zinc-300 leading-8">
                Completed intensive hands-on training in
                React.js, Node.js, Express.js, MongoDB,
                REST APIs, Git, and GitHub by building
                practical full-stack applications.
              </p>

            </div>

            <div className="flex gap-4">

              <FaCertificate className="text-blue-500 mt-1 text-xl" />

              <p className="text-zinc-300 leading-8">
                Successfully completed the MERN Stack program
                and received both a Course Completion Certificate
                and an Internship Certificate for outstanding participation.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;