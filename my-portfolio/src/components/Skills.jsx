import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript,
  SiPhp, SiThreedotjs, SiFlutter, SiReact, SiDotnet, SiFastapi,
  SiXampp, SiPostgresql, SiFirebase, SiMysql, SiSqlite,
  SiEclipseide, SiFigma, SiAndroidstudio, SiLinux, SiJsonwebtokens,
  SiDocker, SiGit, SiGithub, SiGitlab, SiNodedotjs, SiMongodb
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVisualStudio, TbApi } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";
import {
  FaJava, FaDatabase, FaBolt, FaHtml5, FaCss3Alt,
  FaWindows, FaNetworkWired, FaServer, FaWifi, FaDesktop
} from "react-icons/fa6";
import { GiSpartanHelmet, GiBrain } from "react-icons/gi";
import {
  MdVpnLock, MdSecurity, MdSettingsEthernet, MdNetworkCheck, MdSend
} from "react-icons/md";
import { VscVscode, VscGraph } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

// Composite Icon for NoSQL
const NoSQLIcon = () => (
  <div className="relative flex justify-center items-center w-full h-full text-5xl text-[#00758F] drop-shadow-[0_0_12px_rgba(0,117,143,0.6)]">
    <FaDatabase />
    <motion.div
      animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute bottom-[-4px] right-[-4px] text-2xl text-[#47A248]"
    >
      <FaBolt />
    </motion.div>
  </div>
);

const skillsList = [
  { name: "Python", icon: <SiPython className="text-5xl text-[#3776AB]" />, color: "rgba(55, 118, 171, 0.3)" },
  { name: "Java", icon: <FaJava className="text-5xl text-[#f89820]" />, color: "rgba(248, 152, 32, 0.3)" },
  { name: "C#", icon: <TbBrandCSharp className="text-5xl text-[#9b4993]" />, color: "rgba(155, 73, 147, 0.3)" },
  { name: "Flutter", icon: <SiFlutter className="text-5xl text-[#02569B]" />, color: "rgba(2, 86, 155, 0.3)" },
  { name: "PHP", icon: <SiPhp className="text-5xl text-[#777BB4]" />, color: "rgba(119, 123, 180, 0.3)" },
  { name: "JavaScript", icon: <SiJavascript className="text-5xl text-[#F7DF1E]" />, color: "rgba(247, 223, 30, 0.3)" },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-[#3178C6]" />, color: "rgba(49, 120, 198, 0.3)" },
  { name: "React", icon: <SiReact className="text-5xl text-[#61DAFB]" />, color: "rgba(97, 218, 251, 0.3)" },
  { name: "HTML", icon: <FaHtml5 className="text-5xl text-[#E34F26]" />, color: "rgba(227, 79, 38, 0.3)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-[#1572B6]" />, color: "rgba(21, 114, 182, 0.3)" },
  { name: ".NET", icon: <SiDotnet className="text-5xl text-[#512BD4]" />, color: "rgba(81, 43, 212, 0.3)" },
  { name: "ASP.NET", icon: <DiDotnet className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "Node.js", icon: <SiNodedotjs className="text-5xl text-[#339933]" />, color: "rgba(51, 153, 51, 0.3)" },
  { name: "FastAPI", icon: <SiFastapi className="text-5xl text-[#05998B]" />, color: "rgba(5, 153, 139, 0.3)" },
  { name: "SQL", icon: <FaDatabase className="text-5xl text-[#00758F]" />, color: "rgba(0, 117, 143, 0.3)" },
  { name: "NoSQL", icon: <NoSQLIcon />, color: "rgba(0, 117, 143, 0.3)" },
  { name: "MySQL", icon: <SiMysql className="text-5xl text-[#4479A1]" />, color: "rgba(68, 121, 161, 0.3)" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-[#4169E1]" />, color: "rgba(65, 105, 225, 0.3)" },
  { name: "Firebase", icon: <SiFirebase className="text-5xl text-[#FFCA28]" />, color: "rgba(255, 202, 40, 0.3)" },
  { name: "SQLite", icon: <SiSqlite className="text-5xl text-[#003B57]" />, color: "rgba(0, 59, 87, 0.3)" },
  { name: "SQL Server", icon: <DiMsqlServer className="text-5xl text-[#CC2927]" />, color: "rgba(204, 41, 39, 0.3)" },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-[#47A248]" />, color: "rgba(71, 162, 72, 0.3)" },
  { name: "XAMPP", icon: <SiXampp className="text-5xl text-[#FB7E14]" />, color: "rgba(251, 126, 20, 0.3)" },
  { name: "VS Code", icon: <VscVscode className="text-5xl text-[#007ACC]" />, color: "rgba(0, 122, 204, 0.3)" },
  { name: "Visual Studio", icon: <TbBrandVisualStudio className="text-5xl text-[#5C2D91]" />, color: "rgba(92, 45, 145, 0.3)" },
  { name: "Android Studio", icon: <SiAndroidstudio className="text-5xl text-[#3DDC84]" />, color: "rgba(61, 220, 132, 0.3)" },
  { name: "Eclipse", icon: <SiEclipseide className="text-5xl text-[#2C2255]" />, color: "rgba(44, 34, 85, 0.3)" },
  { name: "Figma", icon: <SiFigma className="text-5xl text-[#F24E1E]" />, color: "rgba(242, 78, 30, 0.3)" },
  { name: "Windows", icon: <FaWindows className="text-5xl text-[#0078D4]" />, color: "rgba(0, 120, 212, 0.3)" },
  { name: "Linux", icon: <SiLinux className="text-5xl text-[#FCC624]" />, color: "rgba(252, 198, 36, 0.3)" },
  { name: "TCP/IP", icon: <FaNetworkWired className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "LAN/WAN", icon: <FaServer className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "WLAN", icon: <FaWifi className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "VPN", icon: <MdVpnLock className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "Security", icon: <MdSecurity className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "IP Management", icon: <MdSettingsEthernet className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "VLAN Setup", icon: <MdNetworkCheck className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "NLP", icon: <GiBrain className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "Linear Regression", icon: <VscGraph className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-5xl text-[#d63aff]" />, color: "rgba(214, 58, 255, 0.3)" },
  { name: "REST APIs", icon: <TbApi className="text-5xl text-[#00D0FF]" />, color: "rgba(0, 208, 255, 0.3)" },
  { name: "Docker", icon: <SiDocker className="text-5xl text-[#2496ED]" />, color: "rgba(36, 150, 237, 0.3)" },
  { name: "Git", icon: <SiGit className="text-5xl text-[#F05032]" />, color: "rgba(240, 80, 50, 0.3)" },
  { name: "GitHub", icon: <SiGithub className="text-5xl" style={{ color: "var(--text-primary)" }} />, color: "rgba(120, 120, 120, 0.3)" },
  { name: "GitLab", icon: <SiGitlab className="text-5xl text-[#FC6D26]" />, color: "rgba(252, 109, 38, 0.3)" },

];

const SkillCard = ({ skill, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
      whileHover={{ y: -10, scale: 1.05 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl"
      style={{ 
        backgroundColor: "var(--card-bg)", 
        borderColor: "var(--card-border)",
        borderWidth: "1px"
      }}
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(circle 150px at ${x}px ${y}px, ${skill.color}, transparent)`
          ),
        }}
      />

      <motion.div
        className="mb-5 relative z-10 flex justify-center items-center h-14 w-14 md:h-20 md:w-20"
        animate={{
          y: [0, -8, 0],
          rotateY: [0, 15, 0],
          filter: [`drop-shadow(0 0 5px ${skill.color})`, `drop-shadow(0 0 20px ${skill.color})`, `drop-shadow(0 0 5px ${skill.color})`]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
      >
        <div className="group-hover:scale-125 transition-all duration-700 ease-in-out">
          {skill.icon}
        </div>
      </motion.div>

      <span className="font-black tracking-widest text-[9px] md:text-[11px] text-center relative z-10 group-hover:text-cyan-accent transition-colors duration-300 uppercase font-poppins" style={{ color: "var(--text-secondary)" }}>
        {skill.name}
      </span>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#00D0FF] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-[#00D0FF]/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[90rem] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Tech Stack</p>
          <h2 className="section-title mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Skills</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-12 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-5 md:gap-8">
          {skillsList.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
