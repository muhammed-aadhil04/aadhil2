import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiCloudinary,
  SiStripe,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
    ],
  },

  {
    title: "Other",
    skills: [
      { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
      { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400" },
      { name: "Stripe", icon: <SiStripe />, color: "text-violet-400" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px] rounded-full"></div>

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
            TECHNICAL SKILLS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            My Tech Stack
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            These are the technologies, frameworks and tools I use to
            build fast, responsive and scalable full-stack web
            applications.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-4 bg-zinc-950 rounded-2xl p-4 border border-zinc-800 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                      {skill.icon}
                    </div>

                    <span className="font-medium text-zinc-200">
                      {skill.name}
                    </span>
                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;