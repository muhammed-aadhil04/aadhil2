import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "MERN Stack",
      desc: "Frontend: React\nBackend: Node.js • Express\nDatabase: MongoDB",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "BCA in Artificial Intelligence",
    },
    {
      icon: <FaCertificate />,
      title: "Training",
      desc: "Zoople Technologies\nMERN Stack Program",
    },
    {
      icon: <FaRocket />,
      title: "Currently seeking",
      desc: "Open to  Full Stack Developer Opportunities",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[170px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.45em] text-blue-500 text-sm font-semibold">
            ABOUT ME
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Get To Know Me
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            Passionate about building modern web applications,
            solving real-world problems, and continuously learning
            new technologies.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Hi, I'm
              <span className="text-blue-500"> Muhammed Aadhil</span>
            </h3>

            <p className="text-zinc-300 leading-8 text-lg">
              I'm a <span className="text-blue-400">MERN Stack Developer</span>
              {" "}with a Bachelor's degree in Computer Applications
              specializing in{" "}
              <span className="text-blue-400">
                Artificial Intelligence.
              </span>

              <br />
              <br />

              I completed an intensive MERN Stack training program at
              <span className="text-blue-400">
                {" "}Zoople Technologies
              </span>
              , where I earned both a Course Completion Certificate
              and an Internship Certificate while building real-world
              full-stack projects.

              <br />
              <br />

              I enjoy creating modern, responsive, and scalable web
              applications using{" "}
<span className="text-blue-400">React</span>,{" "}
<span className="text-blue-400">Node.js</span>,{" "}
<span className="text-blue-400">Express.js</span>, and{" "}
<span className="text-blue-400">MongoDB</span>. I'm continuously improving my skills and enjoy
              building solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-7"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl text-blue-500 mb-6 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-zinc-400 whitespace-pre-line leading-7">
                  {card.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;