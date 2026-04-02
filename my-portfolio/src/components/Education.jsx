import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineMapPin } from "react-icons/hi2";
import pearsonLogo from "../assets/pearsonLogo.png";
import wolverhamptonLogo from "../assets/wolverhamptonLogo.png";
import SunRayLogo from "../assets/SunRayLogo.png";
import SchoolLogo from "../assets/SchoolLogo.png";
import NenasalaLogo from "../assets/NenasalaLogo.png"

const educationData = [
  {
    degree: "BSc (Hons) in Computer Science (Software Engineering)",
    institution: "University of Wolverhampton",
    location: "Cinec Campus",
    year: "Sep 2025 - Present",
    status: "Ongoing",
    logo: wolverhamptonLogo,
  },
  {
    degree: "Higher Diploma in Software Engineering (BTEC HND Level 5)",
    institution: "Pearson College London",
    location: "Esoft Metro Campus",
    year: "2023 - 2025",
    status: "Completed",
    logo: pearsonLogo,
  },
  {
    degree: "Diploma in English",
    institution: "Sun Ray Institute Of English Training",
    location: "Ambalantota, Sri Lanka",
    year: "2023",
    status: "Completed",
    logo: SunRayLogo,
  },
  {
    degree: "Computer Application Certificate Course",
    institution: "Nenasala Foundation",
    location: "Tangalle, Sri Lanka",
    year: "2023",
    status: "Completed",
    logo: NenasalaLogo,
  },
  {
    degree: "G.C.E Advanced Level",
    institution: "H/Ruhunu Vijayaba National College",
    location: "Beliatta, Sri Lanka",
    year: "2020",
    status: "Completed",
    logo: SchoolLogo,
  },
  {
    degree: "G.C.E Ordinary Level",
    institution: "H/Ruhunu Vijayaba National College",
    location: "Beliatta, Sri Lanka",
    year: "2017",
    status: "Completed",
    logo: SchoolLogo,
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Academic Journey</p>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 flex items-center gap-4 font-poppins">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Education</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-12 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00D0FF] via-[#00D0FF]/30 to-transparent md:left-1/2 md:-ml-[1px]" />

          <div className="flex flex-col gap-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[28px] md:left-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border-4 border-[#00D0FF] shadow-[0_0_15px_rgba(0,208,255,0.5)] -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>

                {/* Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 !== 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="text-glass-container p-6 md:p-8 hover:border-[#00D0FF]/40 transition-all duration-500 ease-out hover:-translate-y-2 group cursor-default">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D0FF]/10 text-[#00D0FF] text-[11px] font-bold uppercase tracking-wider border border-[#00D0FF]/20">
                        <HiOutlineCalendar className="text-[14px]" />
                        {item.year}
                      </span>

                      {item.status && (
                        <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-lg backdrop-blur-md ${item.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(52,211,153,0.1)]'
                          : 'bg-[#00D0FF]/10 text-[#00D0FF] border border-[#00D0FF]/20 animate-pulse'
                          }`}>
                          {item.status}
                        </span>
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 font-poppins group-hover:text-[#00D0FF] transition-colors leading-tight">
                          {item.degree}
                        </h3>
                      </div>

                      {/* Logo Container */}
                      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={item.institution}
                            className="w-full h-full object-contain filter group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`${item.logo ? 'hidden' : 'flex'} w-full h-full items-center justify-center text-[#00D0FF]/40 text-4xl md:text-5xl`}>
                          <HiOutlineAcademicCap />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-zinc-400 text-[13px] font-inter">
                      <div className="flex items-center gap-2">
                        <HiOutlineAcademicCap className="text-[#00D0FF] text-lg" />
                        <span className="font-medium text-zinc-200">{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineMapPin className="text-[#00D0FF] text-lg" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
