import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import htmlCertImg from "../assets/certificate/Introduction to Html.png";
import htmlGreatLearningImg from "../assets/certificate/Front End developer - HTML.png";
import cssCertImg from "../assets/certificate/Introduction to CSS.png";
import sqlIntroImg from "../assets/certificate/Introduction to SQL.png";
import nosqlIntroImg from "../assets/certificate/Introduction to NoSQL.png";
import sqlInterImg from "../assets/certificate/SQL Intermediate.png";
import webDesignImg from "../assets/certificate/Web Design for Beginners.png";
import genAiImg from "../assets/certificate/Genrrative AI in Practice.png";
import netSecImg from "../assets/certificate/Network Security.png";
import cloudFoundImg from "../assets/certificate/Cloud Foundations.png";
import uiuxImg from "../assets/certificate/UI UX for Beginners.png";
import pythonImg from "../assets/certificate/Introduction to Python.png";
import projectMgmtImg from "../assets/certificate/Project Management.png";
import techForEveryoneImg from "../assets/certificate/Tech for Everyone.png";
import cSharpImg from "../assets/certificate/Introduction to CSharp.png";

export const certificationsData = [
  {
    id: "project-mgmt",
    title: "Project Management",
    issuer: "Great Learning Academy",
    year: "2023",
    link: "https://www.mygreatlearning.com/certificate/FGDMLMJS",
    image: projectMgmtImg,
    description: "Certification for successfully completing the Project Management course."
  },
  {
    id: "tech-for-everyone",
    title: "Tech for Everyone",
    issuer: "sololearn",
    year: "2026",
    link: "https://www.sololearn.com/certificates/CC-BYFAWAHH",
    image: techForEveryoneImg,
    description: "Demonstrates a theoretical and practical understanding of foundational tech concepts."
  },
  {
    id: "c-sharp-intro",
    title: "Introduction to C#",
    issuer: "sololearn",
    year: "2023",
    link: "https://www.sololearn.com/certificates/CC-UGA4TRGX",
    image: cSharpImg,
    description: "Demonstrates a theoretical and practical understanding of C#."
  },
  {
    id: "gen-ai",
    title: "Generative AI in Practice",
    issuer: "sololearn",
    year: "2026",
    link: "https://www.sololearn.com/certificates/CC-HSFDXO33",
    image: genAiImg,
    description: "Demonstrates a theoretical and practical understanding of Generative AI in Practice."
  },
  {
    id: "net-sec",
    title: "Network Security",
    issuer: "Great Learning Academy",
    year: "2023",
    link: "https://www.mygreatlearning.com/certificate/WKPLGSTU",
    image: netSecImg,
    description: "Certification for successfully completing the Network Security course."
  },
  {
    id: "cloud-foundations",
    title: "Cloud Foundations",
    issuer: "Great Learning Academy",
    year: "2023",
    link: "https://www.mygreatlearning.com/certificate/BNBWMCAH",
    image: cloudFoundImg,
    description: "Certification for successfully completing the Cloud Foundations course."
  },
  {
    id: "ui-ux",
    title: "UI / UX for Beginners",
    issuer: "Great Learning Academy",
    year: "2023",
    link: "https://www.mygreatlearning.com/certificate/JNGYBGOM",
    image: uiuxImg,
    description: "Certification for successfully completing the UI / UX for Beginners course."
  },
  {
    id: "python-intro",
    title: "Introduction to Python",
    issuer: "sololearn",
    year: "2023",
    link: "https://www.sololearn.com/certificates/CC-O53QBCFJ",
    image: pythonImg,
    description: "Demonstrates a theoretical and practical understanding of Python."
  },
  {
    id: "web-design-uom",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2026",
    link: "https://open.uom.lk/verify",
    image: webDesignImg,
    description: "Online learning programme in Web Design for Beginners conducted by the Department of Information Technology."
  },
  {
    id: "html-intro",
    title: "Introduction to HTML",
    issuer: "sololearn",
    year: "2023",
    link: "https://www.sololearn.com/certificates/CC-T3TIBCBT",
    image: htmlCertImg,
    description: "Demonstrates a theoretical and practical understanding of HTML."
  },
  {
    id: "html-great-learning",
    title: "Front End Development - HTML",
    issuer: "Great Learning Academy",
    year: "2023",
    link: "https://www.mygreatlearning.com/certificate/JTIDTKHA",
    image: htmlGreatLearningImg,
    description: "Certification for successfully completing the Front End Development - HTML course."
  },
  {
    id: "css-intro",
    title: "Introduction to CSS",
    issuer: "sololearn",
    year: "2023",
    link: "https://www.sololearn.com/certificates/CC-WPJAV3QK",
    image: cssCertImg,
    description: "Demonstrates a theoretical and practical understanding of CSS."
  },
  {
    id: "sql-intro",
    title: "Introduction to SQL",
    issuer: "sololearn",
    year: "2023",
    link: "https://www.sololearn.com/certificates/CC-MKRFBKKM",
    image: sqlIntroImg,
    description: "Demonstrates a theoretical and practical understanding of SQL."
  },
  {
    id: "nosql-intro",
    title: "Introduction to NoSQL",
    issuer: "Great Learning Academy",
    year: "2023",
    link: "https://www.mygreatlearning.com/certificate/CQYMDPQG",
    image: nosqlIntroImg,
    description: "Certification for successfully completing the Introduction to NoSQL course."
  },
  {
    id: "sql-intermediate",
    title: "SQL Intermediate",
    issuer: "sololearn",
    year: "2023",
    link: "https://www.sololearn.com/certificates/CC-AQ0BMEOZ",
    image: sqlInterImg,
    description: "Demonstrates a theoretical and practical understanding of intermediate SQL concepts."
  }
].sort((a, b) => parseInt(b.year || 0) - parseInt(a.year || 0));

const Certifications = () => {
  // Only show the first 3 certifications on the home page
  const previewCerts = certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Achievements</p>
          <h2 className="section-title mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Certifications</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-6 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy max-w-2xl">
            A showcase of my professional qualifications and continuous learning journey in software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewCerts.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00D0FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,208,255,0.1)] min-h-[380px] sm:min-h-[420px]"
            >
              <div className="h-48 sm:h-64 w-full overflow-hidden relative border-b border-[var(--card-border)]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/certification/${cert.id}`} className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-[#00D0FF] hover:border-[#00D0FF] transition-all">
                    View Certification <FaExternalLinkAlt size={14} />
                  </Link>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-sm font-bold text-[var(--text-primary)] bg-[var(--glass-bg)] px-4 py-1.5 rounded-full border border-[var(--glass-border)]">
                    {cert.year}
                  </span>
                  <span className="text-sm font-bold text-[#00D0FF] tracking-wider uppercase">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--text-primary)] group-hover:text-[#00D0FF] transition-colors leading-tight">
                  {cert.title}
                </h3>

                <p className="text-base text-[var(--text-secondary)] flex-grow leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            to="/certifications"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[var(--text-primary)] border border-[#00D0FF]/30 hover:border-[#00D0FF] hover:bg-[#00D0FF]/10 transition-all duration-300"
          >
            View All Certifications <FaArrowRight className="text-[#00D0FF]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

