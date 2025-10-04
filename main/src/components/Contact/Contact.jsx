import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css"; // Use your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send message
    emailjs
      .send(
        "service_l4xygsn",
        "template_d0x9wno",
        formData,
        "IzehOltyl6Vc8jVRw"
      )
      .then(() => {
        toast.success("✅ Your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Try again.");
        setLoading(false);
      });

    // Send welcome email
    emailjs
      .send(
        "service_l4xygsn",
        "template_p2ycwum",
        {
          to_name: formData.name,
          to_email: formData.email,
          company_name: "Your Company Name",
          company_email: "support@yourcompany.com",
        },
        "IzehOltyl6Vc8jVRw"
      )
      .then(() => console.log("Welcome email sent!"))
      .catch(() => console.error("Error sending welcome email"));
  };

  return (
    <section className="contact-section" id="contact">
      <Toaster position="top-right" />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-title"
      >
        Get In Touch
      </motion.h1>

      <div className="contact-container">
        {/* Left Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="contact-description"
        >
          <p>Let's connect! Send me a message using the form.</p>
          <p>Whether it’s a new project, collaboration, or just a chat, I’m happy to hear from you.</p>
          <p>Include any details you think are important—this helps me respond quickly and effectively.</p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="input-wrapper">
            <User className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <Mail className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <MessageSquare className="input-icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
