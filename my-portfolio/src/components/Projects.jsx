import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import portfolioImg_01 from "../assets/projects/Portfolio-01.png";
import portfolioImg_02 from "../assets/projects/Portfolio-02.png";
import portfolioImg_03 from "../assets/projects/Portfolio-03.png";
import portfolioImg_04 from "../assets/projects/Portfolio-04.png";

import salesDashImg from "../assets/projects/sales_dashboard.jpg";
import reservationImg from "../assets/projects/reservation_platform.jpg";

import malcolmLismoreImg_01 from "../assets/projects/Malcolm-Lismore-Photographer-01.png";
import malcolmLismoreImg_02 from "../assets/projects/Malcolm-Lismore-Photographer-02.png";
import malcolmLismoreImg_03 from "../assets/projects/Malcolm-Lismore-Photographer-03.png";
import malcolmLismoreImg_04 from "../assets/projects/Malcolm-Lismore-Photographer-04.png";
import malcolmLismoreImg_05 from "../assets/projects/Malcolm-Lismore-Photographer-05.png";
import malcolmLismoreImg_06 from "../assets/projects/Malcolm-Lismore-Photographer-06.png";


export const projectsData = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "React, Tailwind",
    year: "2026",
    link: "https://github.com/Pasan-Pramuditha/Portfolio",
    demoLink: "https://www.pasanpramuditha.site/",
    image: portfolioImg_01,
    images: [portfolioImg_01, portfolioImg_02, portfolioImg_03, portfolioImg_04],
    description: "A responsive portfolio experience designed to showcase skills, projects, and contact details with a clean and professional layout.",
    longDescription: "A fully responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features include smooth scroll animations with Framer Motion, a dynamic project showcase, and a clean, modern aesthetic.",
    features: [
      "Responsive layout for mobile, tablet, and desktop",
      "Smooth scroll animations and page transitions",
      "Dark and Light mode support",
      "Dynamic project rendering from data arrays"
    ],
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "React Router", "EmailJS"]
  },
  {
    id: "malcolm-lismore-photography",
    title: "Malcolm Lismore Photography Portfolio",
    category: "HTML, CSS",
    year: "2024",
    link: "https://github.com/Pasan-Pramuditha/Malcolm-Lismore-Photographer-Website.git",
    demoLink: "https://drive.google.com/file/d/1VZrHLmLFpaaW9n-dEgveQveQCOMxnxKQ/view?usp=sharing",
    image: malcolmLismoreImg_01,
    images: [malcolmLismoreImg_01, malcolmLismoreImg_02, malcolmLismoreImg_03, malcolmLismoreImg_04, malcolmLismoreImg_05, malcolmLismoreImg_06],
    description: "A visually captivating and fully responsive portfolio website tailored to exhibit professional photography services and high-quality image galleries.",
    longDescription: "A premium photography portfolio web application architected with PHP and MySQL. It features a modern, responsive design that seamlessly showcases categorized galleries for landscape, wildlife, and event photography. The system includes an interactive service pricing module, a dynamic customer inquiry form with database integration, and a secure backend authentication system for seamless management.",
    features: [
      "Modern and responsive UI with Bootstrap and dynamic AOS scroll animations",
      "Categorized, high-resolution image galleries (Landscape, Wildlife, Weddings & Events)",
      "Interactive contact and inquiry system with real-time MySQL database storage",
      "Secure, role-based backend authentication for administration and content management"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"]
  },
  {
    id: "sales-dashboard",
    title: "Sales Analysis Dashboard",
    category: "Python, Data Viz",
    year: "2025",
    link: "#",
    demoLink: "#",
    image: salesDashImg,
    images: [salesDashImg, salesDashImg, salesDashImg, salesDashImg],
    description: "A data-focused project that transforms raw sales information into readable visual insights for better decision making.",
    longDescription: "A comprehensive data visualization dashboard built using Python. It ingests raw sales data and generates interactive graphs and charts to help stakeholders identify trends and make informed decisions.",
    features: [
      "Interactive data charts and graphs",
      "Automated data cleaning and preprocessing",
      "Customizable date ranges and filters",
      "Exportable data summaries"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Dash"]
  },
  {
    id: "reservation-platform",
    title: "Reservation Platform",
    category: "JavaFX, MySQL",
    year: "2024",
    link: "#",
    demoLink: "#",
    image: reservationImg,
    images: [reservationImg, reservationImg, reservationImg, reservationImg],
    description: "A reservation management solution that streamlines customer details, booking status, and service tracking in one flow.",
    longDescription: "A robust booking and reservation management system built with JavaFX and MySQL. Designed for the hospitality industry, it provides real-time room availability, customer management, and automated booking workflows.",
    features: [
      "Real-time calendar availability checking",
      "Customer booking and cancellation workflows",
      "Automated invoice generation",
      "Modern UI built with JavaFX"
    ],
    technologies: ["JavaFX", "Java", "MySQL", "CSS"]
  },
];

const Projects = () => {
  // Only show the first 3 projects on the home page
  const previewProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Recent work </p>
          <h2 className="section-title mb-4">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Projects</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-6 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy max-w-2xl">
            A collection of work that reflects my practical experience in building
            software solutions and digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00D0FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,208,255,0.1)]"
            >
              <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden relative border-b border-[var(--card-border)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/20 hover:bg-[#00D0FF] hover:border-[#00D0FF] transition-all text-sm sm:text-base">
                    View Project <FaExternalLinkAlt size={14} />
                  </Link>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] bg-[var(--glass-bg)] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[var(--glass-border)]">
                    {project.year}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00D0FF] tracking-wider uppercase">
                    {project.category} {project.technologies && project.technologies.length > 2 && `+${project.technologies.length - 2}`}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--text-primary)] group-hover:text-[#00D0FF] transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] flex-grow leading-relaxed">
                  {project.description}
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
            to="/projects"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[var(--text-primary)] border border-[#00D0FF]/30 hover:border-[#00D0FF] hover:bg-[#00D0FF]/10 transition-all duration-300"
          >
            View All Projects <FaArrowRight className="text-[#00D0FF]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

