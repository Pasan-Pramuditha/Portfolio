import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  FiGlobe, 
  FiSmartphone, 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiMonitor 
} from "react-icons/fi";

const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance web applications using modern frameworks like React, Next.js, and Tailwind CSS. Focus on clean code and SEO optimization.",
    icon: <FiGlobe size={32} />,
    color: "#00D0FF",
    delay: 0.1
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications for iOS and Android using Flutter and React Native. Delivering native-like performance and beautiful user interfaces.",
    icon: <FiSmartphone size={32} />,
    color: "#a78bfa",
    delay: 0.2
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and aesthetically pleasing user interfaces with Figma. Focus on user experience, accessibility, and modern design principles.",
    icon: <FiLayout size={32} />,
    color: "#fb923c",
    delay: 0.3
  },
  {
    title: "Backend Development",
    description: "Architecting scalable and secure server-side logic and RESTful APIs using Node.js, FastAPI, and .NET. Ensuring robust security and performance.",
    icon: <FiServer size={32} />,
    color: "#4ade80",
    delay: 0.4
  },
  {
    title: "Database Solutions",
    description: "Designing and managing efficient database structures with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase). Optimization for data integrity and speed.",
    icon: <FiDatabase size={32} />,
    color: "#f472b6",
    delay: 0.5
  },
  {
    title: "Desktop Applications",
    description: "Developing powerful cross-platform desktop applications using .NET, Java, and Electron, tailored for specific business needs and performance.",
    icon: <FiMonitor size={32} />,
    color: "#2dd4bf",
    delay: 0.6
  }
];

const containerVariants = {
  initial: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  hover: { 
    y: -10, 
    transition: { duration: 0.4, ease: "easeInOut" } 
  }
};

const childVariants = {
  initial: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const ServiceCard = ({ service }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      className="group relative h-full rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 overflow-hidden cursor-default"
      style={{ 
        backgroundColor: "var(--card-bg)", 
        border: "1px solid var(--card-border)",
        backdropFilter: "blur(12px)"
      }}
    >
      {/* Dynamic Mouse-Following Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(circle 250px at ${x}px ${y}px, ${service.color}25, transparent 80%)`
          ),
        }}
      />

      {/* Decorative Gradient Border on Hover */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#00D0FF] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon Container */}
        <motion.div 
          variants={{
            initial: { rotate: 0, scale: 0.8, opacity: 0 },
            visible: { 
              rotate: 0, 
              scale: 1, 
              opacity: 1,
              transition: { duration: 0.6, ease: "backOut" } 
            },
            hover: { 
              rotate: 15, 
              scale: 1.15,
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }
          }}
          className="mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{ 
            backgroundColor: `${service.color}15`,
            color: service.color,
            border: `1px solid ${service.color}30`
          }}
        >
          {/* Continuous subtle floating animation */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {service.icon}
          </motion.div>
        </motion.div>

        {/* Content with internal stagger */}
        <motion.h3 
          variants={childVariants}
          className="text-xl md:text-2xl font-bold mb-4 font-poppins transition-colors duration-300 group-hover:text-[#00D0FF]" 
          style={{ color: "var(--text-primary)" }}
        >
          {service.title}
        </motion.h3>
        
        <motion.p 
          variants={childVariants}
          className="text-[14px] md:text-base leading-relaxed font-outfit" 
          style={{ color: "var(--text-secondary)" }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden transition-colors duration-500" style={{ borderBottom: "1px solid var(--card-border)" }}>
      {/* Ambient Background Orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[90rem] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Specialized In</p>
          <h2 className="section-title mb-4 flex flex-wrap items-center gap-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Services</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-12 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy">
            I provide end-to-end digital solutions, combining creative design with robust technology 
             to help you build and scale your products effectively.
          </p>
        </motion.div>

        {/* Services Grid with Container Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
