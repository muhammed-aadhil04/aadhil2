import { motion } from "framer-motion";
import { FaGithub, FaShoppingCart, FaRobot, FaCoffee } from "react-icons/fa";



const projects = [
  {
    title: "MERN E-Commerce Platform",
    preview: "ecommerce",
    description:
      "A complete full-stack e-commerce application featuring JWT authentication, shopping cart, Stripe payments, Cloudinary image uploads, and an admin dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Cloudinary",
    ],
    github: "https://github.com/muhammed-aadhil04/aadhil2.git",
    
  },
  {
    title: "AI Website Builder",
    preview: "ai",
    description:
      "An AI-powered website generator that creates complete responsive websites using GPT-4o and DeepSeek APIs from simple prompts.",
    technologies: [
      "React",
      "Node.js",
      "GPT-4o",
      "DeepSeek",
    ],
    github: "#",
   
  },
  {
    title: "Coffee Shop Website",
    preview: "coffee",
    description:
      "A modern responsive coffee shop website with beautiful animations, elegant UI and mobile-friendly design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/muhammed-aadhil04/aadhil2.git",
   
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px] rounded-full"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.45em] text-blue-500 text-sm font-semibold">
            PROJECTS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Featured Projects
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            A collection of projects demonstrating my experience in
            full-stack web development and AI-powered applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300"
            >

              {/* Placeholder Image */}

              <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-900 to-zinc-950 border border-zinc-700 mb-8 p-6 flex flex-col justify-center items-center">

  {project.preview === "ecommerce" && (
    <>
      <FaShoppingCart className="text-6xl text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
      <h4 className="text-xl font-semibold">E-Commerce Platform</h4>
      <p className="text-sm text-zinc-400 mt-2">
        Shopping • Payments • Admin
      </p>
    </>
  )}

  {project.preview === "ai" && (
    <>
      <FaRobot className="text-6xl text-violet-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
      <h4 className="text-xl font-semibold">AI Website Builder</h4>
      <p className="text-sm text-zinc-400 mt-2">
        GPT-4o • DeepSeek • AI
      </p>
    </>
  )}

  {project.preview === "coffee" && (
    <>
      <FaCoffee className="text-6xl text-amber-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
      <h4 className="text-xl font-semibold">Coffee Shop</h4>
      <p className="text-sm text-zinc-400 mt-2">
        Responsive • Modern UI
      </p>
    </>
  )}

</div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-6">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-medium"
  >
    <FaGithub />
    View Source Code
  </a>
</div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;