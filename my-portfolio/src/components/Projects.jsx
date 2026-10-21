import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import smartfinImg_01 from "../assets/projects/SmartFin-01.png";
import smartfinImg_02 from "../assets/projects/SmartFin-02.png";
import smartfinImg_03 from "../assets/projects/SmartFin-03.jpeg";
import smartfinImg_04 from "../assets/projects/SmartFin-04.png";
import smartfinImg_05 from "../assets/projects/SmartFin-05.png";
import smartfinImg_06 from "../assets/projects/SmartFin-06.png";
import smartfinImg_07 from "../assets/projects/SmartFin-07.png";
import smartfinImg_08 from "../assets/projects/SmartFin-08.png";
import smartfinImg_09 from "../assets/projects/SmartFin-09.png";
import smartfinImg_10 from "../assets/projects/SmartFin-10.png";
import smartfinImg_11 from "../assets/projects/SmartFin-11.png";
import smartfinImg_12 from "../assets/projects/SmartFin-12.png";
import smartfinImg_13 from "../assets/projects/SmartFin-13.png";


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

import QuietAttic_01 from "../assets/projects/Quiet Attic-01.png";
import QuietAttic_02 from "../assets/projects/Quiet Attic-02.png";
import QuietAttic_03 from "../assets/projects/Quiet Attic-03.png";
import QuietAttic_04 from "../assets/projects/Quiet Attic-04.png";
import QuietAttic_05 from "../assets/projects/Quiet Attic-05.png";
import QuietAttic_06 from "../assets/projects/Quiet Attic-06.png";
import QuietAttic_07 from "../assets/projects/Quiet Attic-07.png";
import QuietAttic_08 from "../assets/projects/Quiet Attic-08.png";

import grifindoImg_01 from "../assets/projects/Grifindo-01.png";
import grifindoImg_02 from "../assets/projects/Grifindo-02.png";
import grifindoImg_03 from "../assets/projects/Grifindo-03.png";
import grifindoImg_04 from "../assets/projects/Grifindo-04.png";
import grifindoImg_05 from "../assets/projects/Grifindo-05.png";
import grifindoImg_06 from "../assets/projects/Grifindo-06.png";
import grifindoImg_07 from "../assets/projects/Grifindo-07.png";

import dhammaSchoolImg_01 from "../assets/projects/Dhamma School-01.png";
import dhammaSchoolImg_02 from "../assets/projects/Dhamma School-02.png";
import dhammaSchoolImg_03 from "../assets/projects/Dhamma School-03.png";
import dhammaSchoolImg_04 from "../assets/projects/Dhamma School-04.png";
import dhammaSchoolImg_05 from "../assets/projects/Dhamma School-05.png";
import dhammaSchoolImg_06 from "../assets/projects/Dhamma School-06.png";
import dhammaSchoolImg_07 from "../assets/projects/Dhamma School-07.png";
import dhammaSchoolImg_08 from "../assets/projects/Dhamma School-08.png";
import dhammaSchoolImg_09 from "../assets/projects/Dhamma School-09.png";
import dhammaSchoolImg_10 from "../assets/projects/Dhamma School-10.png";


export const projectsData = [
  {
    id: "smartfin-personal-finance",
    title: "SmartFin – Personal Finance & Expense Tracker with AI Insights",
    category: "Mobile App",
    year: "2026",
    link: "https://github.com/Pasan-Pramuditha/SmartFin.git",
    demoLink: "#",
    image: smartfinImg_01,
    images: [smartfinImg_01, smartfinImg_02, smartfinImg_03, smartfinImg_04, smartfinImg_05, smartfinImg_06, smartfinImg_07, smartfinImg_08, smartfinImg_09, smartfinImg_10, smartfinImg_11, smartfinImg_12, smartfinImg_13],
    description: "An advanced, cross-platform mobile application for personal finance management, featuring AI-powered expense categorization and interactive budget tracking.",
    longDescription: "SmartFin is a complete personal finance management ecosystem built with a Flutter mobile frontend and a high-performance Python (FastAPI) backend. The application leverages Machine Learning (NLP) to automatically categorize user expenses. It ensures top-tier security with Biometric logins (Fingerprint/FaceID), Social Auth, and email-based Two-Factor Authentication (2FA). Users can seamlessly set budgets, track multi-currency transactions, visualize spending via interactive charts, and export detailed financial reports to PDF and Excel.",
    features: [
      "AI-Powered expense categorization using Scikit-Learn NLP machine learning models",
      "Secure authentication system featuring Biometrics, Google/Facebook login, and 2FA OTP",
      "Comprehensive financial insights with interactive daily, weekly, and monthly charts",
      "Advanced budget management, multi-currency support, and PDF/Excel report generation"
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Scikit-Learn",
      "Pandas",
      "JWT & OAuth 2.0",
      "Fl-Chart"
    ]
  },

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
    demoLink: "https://youtu.be/yXMiJpNCAOM",
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
    id: "dhamma-school-management-system",
    title: "Siri Vajiranana Dhamma School – Student & Academic Management System",
    category: "C#, .NET 8, MSSQL",
    year: "2024",
    link: "https://github.com/Pasan-Pramuditha/Dhamma-School-Management-System",
    demoLink: "#",
    image: dhammaSchoolImg_01,
    images: [
      dhammaSchoolImg_01,
      dhammaSchoolImg_02,
      dhammaSchoolImg_03,
      dhammaSchoolImg_04,
      dhammaSchoolImg_05,
      dhammaSchoolImg_06,
      dhammaSchoolImg_07,
      dhammaSchoolImg_08,
      dhammaSchoolImg_09,
      dhammaSchoolImg_10
    ],
    description: "A modern desktop school management system built with C# and .NET 8 for Siri Vajiranana Dhamma School to streamline student registrations, academic performance records, teacher assignments, and database backup & maintenance.",
    longDescription: "Siri Vajiranana Dhamma School Management System is a modern, dark-themed enterprise desktop application developed with C# (.NET 8) and Microsoft SQL Server (SSMS). Designed to digitize the administrative workflow of a premier religious educational institution, the platform facilitates comprehensive student enrollment, multi-grade exam score management (Buddhism, Abhidhamma, Pali across Grades 05 to 11), teacher profile registries, role-based admin approval workflows, and automated SQL database backup and restoration.",
    features: [
      "Modern Dark-Themed Dashboard: Intuitive, card-based metrics tracking total students, teachers, results entered, and pending admin approvals",
      "Student Lifecycle & Enrollment: Streamlined registration system capturing personal information, admission years, contact details, and custom skill notes",
      "Multi-Grade Academic Performance Records: Centralized examination scoring and progress tracking across subjects including Buddhism, Abhidhamma, and Pali for grades 05 to 11 with printable detail cards",
      "Teacher Management: Dedicated portal for registering staff, managing subject and grade allocations, and browsing teacher directories",
      "Role-Based Admin Approvals: Multi-tier security workflow for pending administrator registrations with instant approval or rejection controls",
      "Database Backup & Maintenance: Integrated utility to generate full (.bak) SQL database snapshots and perform one-click database restorations",
      "Reliable Database Architecture: Built on Microsoft SQL Server ensuring ACID data integrity, optimized queries, and secure local data persistence"
    ],
    technologies: [
      "C#",
      ".NET 8",
      "Windows Forms",
      "Microsoft SQL Server (SSMS)",
      "ADO.NET"
    ]
  },

  {
    id: "quiet-attic-films",
    title: "Quiet Attic Films – Production Management System",
    category: "C#, .NET, MSSQL",
    year: "2023",
    link: "https://github.com/Pasan-Pramuditha/Quiet-Attic-Film-System-",
    demoLink: "#",
    image: QuietAttic_01,
    images: [QuietAttic_01, QuietAttic_02, QuietAttic_03, QuietAttic_04, QuietAttic_05, QuietAttic_06, QuietAttic_07, QuietAttic_08],
    description: "An enterprise Windows desktop system developed for film production studios to streamline client orders, crew assignments, equipment tracking, and financial billing.",
    longDescription: "Quiet Attic Films Production Management System is a centralized desktop enterprise software engineered with C# (.NET Framework) and Microsoft SQL Server. Specifically tailored for film production studios, the system manages the complexity of concurrent film productions, client reservations, staff, and logistics. It features dual role-based access for Administrators and Operational Staff, facilitating complete lifecycle management for film orders, crew allocation with specialized roles, property & equipment tracking, indoor/outdoor shoot locations, and automated invoicing.",
    features: [
      "Role-Based Access Control: Dedicated portals and secure login authentication for Admins and Operational Staff (Employees)",
      "Film Production & Order Management: End-to-end processing of client film bookings, schedule monitoring, and milestone tracking",
      "Crew & Resource Allocation: Dynamic assignment of production crew members based on specialization, roles, and project requirements",
      "Equipment & Location Scheduling: Comprehensive inventory tracking for cameras, props, and booking schedules for indoor/outdoor shoot locations",
      "Billing & Invoicing Workflows: Automated calculation of service rates, client payment logging, and receipt verification",
      "Enterprise Database Architecture: Microsoft SQL Server backend with ADO.NET ensuring ACID transactions and secure data backups"
    ],
    technologies: [
      "C#",
      ".NET Framework 4.8",
      "Windows Forms",
      "Microsoft SQL Server",
      "ADO.NET"
    ]
  },

  {
    id: "grifindo-toys-payroll-system",
    title: "Grifindo Toys – Payroll & Employee Management System",
    category: "C#, Krypton, MSSQL",
    year: "2023",
    link: "https://github.com/Pasan-Pramuditha/Grifindo-Toys",
    demoLink: "#",
    image: grifindoImg_01,
    images: [grifindoImg_01, grifindoImg_02, grifindoImg_03, grifindoImg_04, grifindoImg_05, grifindoImg_06, grifindoImg_07],
    description: "An enterprise Windows desktop payroll and employee management system developed for Grifindo Toys using C# and Krypton Framework to automate salary calculations, attendance, overtime, and tax deductions with a sleek modern UI.",
    longDescription: "Grifindo Toys Payroll Management System is a specialized desktop application engineered with C# Windows Forms, Krypton Framework (Toolkit), and Microsoft SQL Server. Designed to streamline corporate HR operations with an ultra-modern user interface, the system automates organizational payroll processing, salary cycle evaluations, and employee administration. It empowers administrators to manage multi-branch operations, configure tax and overtime (OT) rates, track monthly attendance records, and accurately calculate gross and net salaries with automated deductions.",
    features: [
      "Modern UI/UX with Krypton Framework: Sleek desktop interface styled with Krypton Toolkit components, rounded controls, custom palettes, and smooth navigation",
      "Role-Based Access & Admin Authentication: Secure login and administrator sign-up portals with credential validation and password toggle",
      "Intuitive Navigation Dashboard: Quick-access navigation hubs to manage Employees, Organization Settings, Salary Calculations, and Branch offices",
      "Employee Profile Lifecycle Management: Comprehensive registry for employee records including personal information, contact details, designations, and base monthly pay",
      "Dynamic Payroll & Salary Issuing: Automated calculation of gross and net salaries factoring in present/absent days, overtime hours, allowances, and tax percentages",
      "Payroll Cycle & Parameter Configuration: Flexible administration for overtime rates, tax brackets, and custom monthly payroll date ranges",
      "Branch Management System: Centralized management of enterprise branch offices, contact numbers, and locations",
      "Relational Database Integration: Microsoft SQL Server backend integrated via ADO.NET ensuring robust transaction processing and persistent storage"
    ],
    technologies: [
      "C#",
      ".NET Framework",
      "Windows Forms",
      "Krypton Framework",
      "Microsoft SQL Server",
      "ADO.NET"
    ]
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

