import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineBuildingOffice } from "react-icons/hi2";
import SLTMobitelLogo from "../assets/SLTMobitelLogo.webp";
import PersonalDevelopment from "../assets/PersonalDevelopment.png";
import freelancerLogo from "../assets/freelancerLogo.png";

const experiences = [
  {
    role: " Intern Software Engineer",
    company: "Sri Lanka Telecom PLC (SLTMobitel)",
    period: "Sep 2025 - Mar 2026",
    logo: SLTMobitelLogo,
  },
  {
    role: "Freelancer",
    company: "Self-Employed",
    period: "2024 - Present",
    logo: freelancerLogo,
  },
  {
    role: "Student - self Development",
    company: "Personal Development",
    period: "2023 - Present",
    logo: PersonalDevelopment,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Career Path</p>
          <h2 className="section-title mb-4 flex flex-wrap items-center gap-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Experience</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-12 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00D0FF] via-[#00D0FF]/30 to-transparent md:left-1/2 md:-ml-[1px]" />

          <div className="flex flex-col gap-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
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
                        {item.period}
                      </span>

                      {item.status && (
                        <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-lg backdrop-blur-md transition-colors duration-300 ${item.status === 'Active'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(52,211,153,0.1)]'
                          : 'bg-cyan-accent/10 text-cyan-700 dark:text-cyan-accent border border-cyan-accent/20 animate-pulse'
                          }`}>
                          {item.status}
                        </span>
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 font-poppins group-hover:text-cyan-accent transition-colors leading-tight" style={{ color: "var(--text-primary)" }}>
                          {item.role}
                        </h3>
                      </div>

                      {/* Logo Container */}
                      <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={item.company}
                            className={`w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500 ${item.role === 'Freelancer' ? 'scale-[1.3] group-hover:scale-[1.4]' : 'group-hover:scale-105'}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`${item.logo ? 'hidden' : 'flex'} w-full h-full items-center justify-center text-[#00D0FF]/40 text-4xl md:text-5xl`}>
                          <HiOutlineBuildingOffice />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-[13px] font-inter" style={{ color: "var(--text-secondary)" }}>
                      <div className="flex items-center gap-2">
                        <HiOutlineBriefcase className="text-cyan-accent text-lg" />
                        <span className="font-medium" style={{ color: "var(--text-primary)" }}>{item.company}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--card-border)" }}>
                      <p className="text-[13px] leading-relaxed font-inter transition-colors" style={{ color: "var(--text-secondary)" }}>
                        {item.summary}
                      </p>
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

export default Experience;
