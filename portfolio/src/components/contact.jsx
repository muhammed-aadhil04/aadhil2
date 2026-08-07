import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            GET IN TOUCH
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Let's Build Something Amazing
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            I'm currently looking for MERN Stack Developer opportunities.
            Feel free to reach out for jobs, internships, or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-10 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.25)] transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-6">
              Let's Work Together
            </h3>

            <p className="text-zinc-400 leading-8 mb-10">
              Whether you have a project idea, internship opportunity,
              or full-time role, I'd love to hear from you.
              Let's create something meaningful together.
            </p>

            <div className="space-y-8">

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-xl">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <p className="text-zinc-500 text-sm">Email</p>
                  <a
  href="mailto:muhammadaadhil2511@gmail.com"
  className="text-white break-all hover:text-blue-400 transition"
>
  muhammadaadhil2511@gmail.com
</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-xl">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">Phone</p>
                  <p className="text-white">
                    +91 9497488933
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">Location</p>
                  <p className="text-white">
                    Kannur, Kerala, India
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-5 mt-12">

              <a
                href="https://github.com/muhammed-aadhil04"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/muhammed-aadhil-84b030276"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={async (event) => {
              event.preventDefault();
              setResult("Sending...");

              const formData = new FormData(event.target);

              formData.append(
                "access_key",
                "dc322bf3-dc77-475d-87e6-b1c59e202e3e"
              );

              const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                  method: "POST",
                  body: formData,
                }
              );

              const data = await response.json();

              if (data.success) {
                setResult("✅ Message sent successfully!");
                event.target.reset();

                setTimeout(() => {
                  setResult("");
                }, 3000);
              } else {
                setResult("❌ Something went wrong.");
              }
            }}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 md:p-10 overflow-hidden hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.25)] transition-all duration-500"
          >

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-5 py-4 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-5 py-4 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-5 py-4 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none transition"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-5 py-4 placeholder:text-zinc-500 resize-none focus:border-blue-500 focus:outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
              >
                <FaPaperPlane />
                Send Message
              </button>

              <p className="text-center text-blue-400 mt-4">
                {result}
              </p>

            </div>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;