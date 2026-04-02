import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// Configuration Constants (Securely loaded from .env)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ZEROBOUNCE_API_KEY = import.meta.env.VITE_ZEROBOUNCE_API_KEY;

const YOUR_EMAIL = "pasanpr58@gmail.com";
const YOUR_PHONE = "+94 77 813 6626";
const YOUR_LOCATION = "Beliatta, Sri Lanka";

const contactInfo = [
  { icon: <FiMail size={20} />, label: "Email", value: YOUR_EMAIL, href: `mailto:${YOUR_EMAIL}` },
  { icon: <FiPhone size={20} />, label: "Phone", value: YOUR_PHONE, href: `tel:${YOUR_PHONE}` },
  { icon: <FiMapPin size={20} />, label: "Location", value: YOUR_LOCATION, href: null },
];

// Floating particle dots
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 6,
  delay: Math.random() * 4,
}));

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Strict email format regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  const trimmed = email.trim();
  if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address.";
  return null; // valid format (ZeroBounce will handle domain/existence check)
}

const inputVariants = {
  focus: { scale: 1.015, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } },
};

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    user_name: "", user_email: "", user_phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleEmailBlur = () => {
    setFocusedField(null);
    setEmailError(validateEmail(formData.user_email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending" || isValidating) return;

    // Check basic format first
    const emailValidationError = validateEmail(formData.user_email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }

    setIsValidating(true);
    setStatus("idle");

    try {
      // 🔍 ZeroBounce Real-time Validation
      const zbResponse = await fetch(
        `https://api.zerobounce.net/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${encodeURIComponent(formData.user_email)}`
      );
      const zbData = await zbResponse.json();
      setIsValidating(false);

      if (zbData.status !== "valid") {
        let msg = "This email address is invalid.";
        if (zbData.status === "disposable") msg = "Disposable emails are not allowed.";
        if (zbData.status === "spamtrap") msg = "This email is blocked by our system.";
        setEmailError(msg);
        return;
      }

      // 📧 Proceed with EmailJS only if ZeroBounce says it's valid
      setStatus("sending");
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setEmailError(null);
      setFormData({ user_name: "", user_email: "", user_phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 15000);
    } catch (err) {
      console.error("Validation/Email Error:", err);
      setIsValidating(false);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section"
    >
      {/* ── Animated floating particles ── */}
      <div className="contact-particles" aria-hidden="true">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="contact-particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Pulsing background orbs ── */}
      <motion.div
        className="contact-bg-orb contact-bg-orb--1"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="contact-bg-orb contact-bg-orb--2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="contact-container">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.p>

          <motion.h2
            className="section-title mb-4 flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-cyan-300"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Me
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-24 h-[4px] bg-gradient-to-r from-cyan-accent to-transparent rounded-full mb-12"
            style={{ boxShadow: "0 0 15px rgba(0,208,255,0.5)" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          />
        </motion.div>

        <div className="contact-grid">
          {/* ── Left Panel - Info ── */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="contact-info-inner">
              {/* Animated ring decoration */}
              <motion.div
                className="contact-animated-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.h3
                className="contact-info-heading"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                Contact Information
              </motion.h3>
              <motion.p
                className="contact-info-desc"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Feel free to reach out through the form or directly via the details below.
              </motion.p>

              <motion.div
                className="contact-info-list"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="contact-info-item group"
                    variants={itemVariants}
                    custom={i}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="contact-info-icon"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      animate={{ boxShadow: ["0 0 0px rgba(0,208,255,0)", "0 0 12px rgba(0,208,255,0.3)", "0 0 0px rgba(0,208,255,0)"] }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <p className="contact-info-label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="contact-info-value contact-info-link">
                          {item.value}
                        </a>
                      ) : (
                        <p className="contact-info-value">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Quick Links */}
              <motion.div
                className="contact-social-links"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.85 }}
              >
                <motion.a
                  href={`mailto:${YOUR_EMAIL}`}
                  className="contact-social-btn"
                  aria-label="Send Email"
                  title="Send Email"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail size={20} />
                </motion.a>
                <motion.a
                  href={`https://wa.me/${YOUR_PHONE.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn contact-social-btn--wa"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp size={22} />
                </motion.a>
              </motion.div>

              {/* Decorative circles */}
              <div className="contact-panel-deco contact-panel-deco--1" />
              <div className="contact-panel-deco contact-panel-deco--2" />
            </div>
          </motion.div>

          {/* ── Right Panel - Form ── */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-5"
              >
                {/* Row 1: Name & Email */}
                <motion.div variants={itemVariants} className="contact-form-row">
                  <div className="contact-field-wrap">
                    <label className="contact-label" htmlFor="contact-name">
                      <FiUser size={14} /> Full Name
                    </label>
                    <motion.input
                      variants={inputVariants}
                      animate={focusedField === "user_name" ? "focus" : "blur"}
                      id="contact-name" type="text" name="user_name"
                      placeholder="Kasun Perera"
                      value={formData.user_name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("user_name")}
                      onBlur={() => setFocusedField(null)}
                      className="contact-input"
                      required
                    />
                  </div>
                  <div className="contact-field-wrap">
                    <label className="contact-label" htmlFor="contact-email">
                      <FiMail size={14} /> Email Address
                    </label>
                    <motion.input
                      variants={inputVariants}
                      animate={focusedField === "user_email" ? "focus" : "blur"}
                      id="contact-email" type="email" name="user_email"
                      placeholder="kasun@email.com"
                      value={formData.user_email}
                      onChange={(e) => {
                        handleChange(e);
                        if (emailError) setEmailError(validateEmail(e.target.value));
                      }}
                      onFocus={() => setFocusedField("user_email")}
                      onBlur={handleEmailBlur}
                      className={`contact-input ${emailError ? "contact-input--error" : ""}`}
                      required
                    />
                    <AnimatePresence>
                      {emailError && (
                        <motion.p
                          className="contact-field-error"
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiAlertCircle size={12} /> {emailError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Row 2: Phone & Subject */}
                <motion.div variants={itemVariants} className="contact-form-row">
                  <div className="contact-field-wrap">
                    <label className="contact-label" htmlFor="contact-phone">
                      <FiPhone size={14} /> Phone Number
                    </label>
                    <motion.input
                      variants={inputVariants}
                      animate={focusedField === "user_phone" ? "focus" : "blur"}
                      id="contact-phone" type="tel" name="user_phone"
                      placeholder="+94 77 123 4567"
                      value={formData.user_phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("user_phone")}
                      onBlur={() => setFocusedField(null)}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field-wrap">
                    <label className="contact-label" htmlFor="contact-subject">
                      <FiMessageSquare size={14} /> Subject
                    </label>
                    <motion.input
                      variants={inputVariants}
                      animate={focusedField === "subject" ? "focus" : "blur"}
                      id="contact-subject" type="text" name="subject"
                      placeholder="Project Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className="contact-input"
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} className="contact-field-wrap">
                  <label className="contact-label" htmlFor="contact-message">
                    <FiMessageSquare size={14} /> Message
                  </label>
                  <motion.textarea
                    variants={inputVariants}
                    animate={focusedField === "message" ? "focus" : "blur"}
                    id="contact-message" name="message" rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="contact-input contact-textarea"
                    required
                  />
                </motion.div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {isValidating && (
                    <motion.div
                      key="validating"
                      className="contact-alert contact-alert--info"
                      initial={{ opacity: 0, scale: 0.9, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <span className="contact-spinner contact-spinner--cyan" />
                      <span>Verifying email address...</span>
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div
                      key="success"
                      className="contact-alert contact-alert--success"
                      initial={{ opacity: 0, scale: 0.9, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 0.5 }}>
                        <FiCheckCircle size={18} />
                      </motion.span>
                      <span>Message sent successfully! I&apos;ll get back to you soon. 🎉</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      className="contact-alert contact-alert--error"
                      initial={{ opacity: 0, scale: 0.9, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiAlertCircle size={18} />
                      <span>Something went wrong. Please try again or email directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className={`contact-btn ${status === "sending" ? "contact-btn--loading" : ""}`}
                    whileHover={status !== "sending" ? { scale: 1.03, boxShadow: "0 10px 40px rgba(0,208,255,0.5)" } : {}}
                    whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="contact-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <FiSend size={18} />
                        </motion.span>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}