import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-zinc-800">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/10 blur-[170px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <h2 className="text-4xl font-bold">
            Muhammed
            <span className="text-blue-500"> Aadhil</span>
          </h2>

          <p className="text-zinc-400 mt-4 max-w-xl mx-auto leading-8">
            MERN Stack Developer passionate about building modern,
            scalable and responsive web applications using the MERN Stack.
          </p>

          {/* Social Icons */}

          <div className="flex justify-center gap-5 mt-10">

            <a
              href="https://github.com/muhammed-aadhil04"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/muhammed-aadhil-84b030276"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:muhammadaadhil2511@gmail.com"
              className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Divider */}

          <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-zinc-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Muhammed Aadhil. All Rights Reserved.
            </p>

            <a
              href="#home"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition"
            >
              Back to Top
              <FaArrowUp />
            </a>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;