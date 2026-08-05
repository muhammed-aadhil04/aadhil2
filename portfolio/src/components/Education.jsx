import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Artificial Intelligence Specialization",
      institute:
        "B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai",
      year: "2022 - 2025",
      description:
        "Completed my Bachelor's degree with a specialization in Artificial Intelligence, studying Machine Learning, Database Management Systems, Web Technologies, Programming, and Software Development.",
    },
    {
      icon: <FaCertificate />,
      title: "MERN Stack Development",
      subtitle: "Zoople Technologies",
      institute: "Professional Training Program",
      year: "2025",
      description:
        "Successfully completed a 4-month intensive MERN Stack training program with hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Git, GitHub, and real-world full-stack project development.",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-black text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[170px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.45em] text-blue-500 text-sm font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Learning Journey
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            My academic background and professional training that
            helped shape my career as a Full Stack Developer.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500 text-4xl shrink-0">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-blue-400 mt-1">
                        {item.subtitle}
                      </p>

                      <p className="text-zinc-400 mt-2">
                        {item.institute}
                      </p>
                    </div>

                    <span className="self-start bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-zinc-300 leading-8 mt-6">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;