import profile from "../assets/images/profile.png";
import resume from "../assets/resume/Muhammed Aadhil .pdf";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaNodeJs,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

function Hero() {
  

 return (
  <section
    id="home"
    className="relative min-h-[100svh] bg-black text-white flex items-center overflow-hidden px-5 sm:px-8 md:px-10 lg:px-20 py-20 md:py-24"
  >

    {/* Background Effects */}

    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-blue-700/5 blur-[170px] rounded-full"></div>

    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[0.45em] text-blue-500 font-semibold text-sm mb-6">
            HELLO, I'M
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            Muhammed
            <br />
            <span className="text-white">
              Aadhil
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Full Stack Developer",
              2000,
              "AI-Integrated Web Apps",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-500 mt-6 min-h-[48px] md:min-h-[55px]"
          />

          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-7 sm:leading-8 max-w-xl">
            I build modern, scalable, and responsive full-stack web applications using the MERN Stack. I enjoy creating fast, user-friendly interfaces and developing AI-powered solutions that solve real-world problems.
          </p>

          <div className="flex items-center gap-3 mt-8 text-blue-400">

            <FaMapMarkerAlt />

            <span className="text-zinc-300">
              Kerala, India
            </span>

          </div>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 duration-300" />
            </a>

            <a
              href={resume}
              download="Muhammed_Aadhil_Resume.pdf"
              className="group border border-zinc-700 hover:border-blue-500 bg-zinc-950 hover:bg-zinc-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="mt-12">

            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-5">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-3">

              {techStack.map((tech) => (

                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >

                  <span className="text-lg">
                    {tech.icon}
                  </span>

                  <span className="text-sm">
                    {tech.name}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="flex gap-5 mt-12">

            {[

              {
                icon: <FaGithub />,
                link: "https://github.com/muhammed-aadhil04",
              },

              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/muhammed-aadhil-84b030276",
              },

              {
                icon: <FaEnvelope />,
                link: "mailto:muhammadaadhil2511@gmail.com",
              },

            ].map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-300"
              >
                {item.icon}
              </a>

            ))}

          </div>

        </motion.div>
        {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center w-full mt-10 lg:mt-0"
>
  {/* Blue Glow */}
  <div className="absolute w-[430px] h-[430px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute inset-0 rounded-[32px] border border-blue-500/20 pointer-events-none"></div>

  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-full max-w-[380px] sm:max-w-[380px] rounded-[32px]
overflow-hidden
bg-zinc-900/80
backdrop-blur-xl
border border-zinc-700
shadow-[0_20px_60px_rgba(0,0,0,.6)]
hover:border-blue-500
hover:-translate-y-2
transition-all duration-500"
  >
   <div className="p-3">
  <img
    src={profile}
    alt="Muhammed Aadhil"
    className="w-full h-[300px] sm:h-[360px] md:h-[410px]
rounded-[28px]
object-cover
object-top
transition-all duration-700
hover:scale-110
hover:brightness-110"
  />
</div>

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

    <div className="relative p-6">

  <h2 className="text-2xl font-bold">
    Muhammed Aadhil
  </h2>

  <p className="text-blue-400 mt-1">
    MERN Stack Developer
  </p>

  <div className="flex items-center gap-2 text-zinc-400 mt-3">
    <FaMapMarkerAlt />
    Kerala, India
  </div>

  <div className="flex flex-wrap gap-2 mt-5">

    <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs">
      React
    </span>

    <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs">
      Node.js
    </span>

    <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs">
      MongoDB
    </span>

  </div>

  <a
    href="#projects"
    className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-blue-400 transition"
  >
    View Portfolio →
  </a>

</div>

  </motion.div>
</motion.div>
      </div>
    </section>
  );
}

export default Hero;