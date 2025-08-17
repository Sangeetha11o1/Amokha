import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import "./Contact.css"; // Optional extra fine styling if needed

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const clearStatusMessage = () => {
    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatusMessage("All fields are required.");
      setIsSuccess(false);
      clearStatusMessage();
      return;
    }

    const templateParams = {
      name,
      email,
      message,
      from_name: name,
      to_name: "Athira",
    };

    emailjs
      .send(
        "service_hn4x9qi",
        "template_749cc4e",
        templateParams,
        "siQYvG1S3rSn_BdEN"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setIsSuccess(true);
          sendAutoReply();
          setName("");
          setEmail("");
          setMessage("");
          clearStatusMessage();
        },
        (err) => {
          setStatusMessage("Failed to send the message. Please try again.");
          setIsSuccess(false);
          console.error("Failed to send message:", err);
          clearStatusMessage();
        }
      );
  };

  const sendAutoReply = () => {
    const autoReplyParams = {
      from_name: name,
      to_email: email,
    };

    emailjs
      .send(
        "service_hn4x9qi",
        "template_s5dzi8s",
        autoReplyParams,
        "siQYvG1S3rSn_BdEN"
      )
      .then(
        () => console.log("Auto-reply sent successfully!"),
        (err) => console.error("Failed to send auto reply:", err)
      );
  };

  return (
    <main className="relative bg-green-100 min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" fill="seagreen">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" fill="lightseagreen">
          <rect width="100" height="100" rx="20" />
        </svg>
      </div>
      <div className="absolute top-20 right-20 w-10 h-10 opacity-20">
        <svg viewBox="0 0 24 24" fill="seagreen">
          <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 
                  0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>

      {/* Contact Card */}
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md md:max-w-lg z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-6 cursive"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us ✉️
        </motion.h3>

        <form onSubmit={sendEmail} className="space-y-6 text-gray-700">
          <div className="relative flex flex-col">
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FiUser /> Name
            </label>
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="relative flex flex-col">
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FiMail /> Email
            </label>
            <input
              type="email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="relative flex flex-col">
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FiMessageSquare /> Message
            </label>
            <textarea
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-32 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Write your message..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-green-600 transition"
            >
              Send
            </motion.button>
          </div>

          {statusMessage && (
            <motion.div
              className={`text-center mt-4 text-lg ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {statusMessage}
            </motion.div>
          )}
        </form>
      </motion.div>
    </main>
  );
};

export default ContactUs;




