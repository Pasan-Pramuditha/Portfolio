import { useState, useRef } from "react";
import { motion } from "framer-motion";
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

// =====================================================
// 🔧 EMAILJS CONFIGURATION
// Replace these with your actual EmailJS credentials
// Steps:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a Service (Gmail recommended) → copy Service ID
// 3. Create an Email Template → copy Template ID
// 4. Go to Account > API Keys → copy Public Key
// =====================================================
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// =====================================================
// Your personal contact info shown on the left panel
// =====================================================
const YOUR_EMAIL = "pasanpr58@gmail.com";
const YOUR_PHONE = "+94 77 813 6626";
const YOUR_LOCATION = "Beliatta, Sri Lanka";

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: YOUR_EMAIL,
    href: `mailto:${YOUR_EMAIL}`,
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: YOUR_PHONE,
    href: `tel:${YOUR_PHONE}`,
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: YOUR_LOCATION,
    href: null,
  },
];

const inputVariants = {
  focus: { scale: 1.01, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } },
};

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section" style={{ borderTop: "1px solid var(--card-border)" }}>
      {/* Background decorations */}
      <div className="contact-bg-orb contact-bg-orb--1" />
      <div className="contact-bg-orb contact-bg-orb--2" />

      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Get In Touch</p>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 flex items-center gap-4 font-poppins">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Me</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-12 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
        </motion.div>

        <div className="contact-grid">
          {/* Left Panel - Info */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info-inner">
              <h3 className="contact-info-heading">Contact Information</h3>
              <p className="contact-info-desc">
                Feel free to reach out through the form or directly via the details below.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="contact-info-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="contact-info-icon">{item.icon}</div>
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
              </div>

              {/* Social Quick Links */}
              <div className="contact-social-links">
                <a
                  href={`mailto:${YOUR_EMAIL}`}
                  className="contact-social-btn"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <FiMail size={20} />
                </a>
                <a
                  href={`https://wa.me/${YOUR_PHONE.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn contact-social-btn--wa"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>

              {/* Decorative circles */}
              <div className="contact-panel-deco contact-panel-deco--1" />
              <div className="contact-panel-deco contact-panel-deco--2" />
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Row 1: Name & Email */}
              <div className="contact-form-row">
                <div className="contact-field-wrap">
                  <label className="contact-label" htmlFor="contact-name">
                    <FiUser size={14} /> Full Name
                  </label>
                  <motion.input
                    variants={inputVariants}
                    animate={focusedField === "from_name" ? "focus" : "blur"}
                    id="contact-name"
                    type="text"
                    name="from_name"
                    placeholder="Kasun Perera"
                    value={formData.from_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("from_name")}
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
                    animate={focusedField === "from_email" ? "focus" : "blur"}
                    id="contact-email"
                    type="email"
                    name="from_email"
                    placeholder="kasun@email.com"
                    value={formData.from_email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("from_email")}
                    onBlur={() => setFocusedField(null)}
                    className="contact-input"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="contact-form-row">
                <div className="contact-field-wrap">
                  <label className="contact-label" htmlFor="contact-phone">
                    <FiPhone size={14} /> Phone Number
                  </label>
                  <motion.input
                    variants={inputVariants}
                    animate={focusedField === "phone" ? "focus" : "blur"}
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
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
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="contact-field-wrap">
                <label className="contact-label" htmlFor="contact-message">
                  <FiMessageSquare size={14} /> Message
                </label>
                <motion.textarea
                  variants={inputVariants}
                  animate={focusedField === "message" ? "focus" : "blur"}
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="contact-input contact-textarea"
                  required
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  className="contact-alert contact-alert--success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle size={18} />
                  <span>Message sent successfully! I&apos;ll get back to you soon. 🎉</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="contact-alert contact-alert--error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiAlertCircle size={18} />
                  <span>Something went wrong. Please try again or email directly.</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className={`contact-btn ${status === "sending" ? "contact-btn--loading" : ""}`}
                whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="contact-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
