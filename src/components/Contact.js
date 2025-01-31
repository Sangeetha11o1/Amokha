import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // To track success or error

  const clearStatusMessage = () => {
    setTimeout(() => {
        setStatusMessage(""); // clear the status message after 5 sec
    }, 5000); // 5000ms = 5 seconds
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
        "service_hn4x9qi", // Replace with your EmailJS service ID
        "template_749cc4e", // Replace with your EmailJS template ID
        templateParams,
        "siQYvG1S3rSn_BdEN"      // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setIsSuccess(true);
          sendAutoReply();//call auto-reply function after sending the email
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
            (response) => {
                console.log("Auto-reply sent successfully!");
            },
            (err) => {
                console.error("Failed to send auto reply:", err);
            }
        );
  };

  return (
    <main className="relative bg-green-200 h-full min-h-screen ">
        <div className="mx-auto ">
            <h3 className="text-4xl font-bold text-center text-blue-500 cursive fade-in pb-16 pt-12">Contact Us </h3>
            <div className="contact-container cursive">
                <h2>Submit Here</h2>
                <form onSubmit={sendEmail}>
                    <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </div>
                    <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                {statusMessage && (<p className={isSuccess ? "success-message" : "error-message"}>{statusMessage}</p>)}
        </div>
        </div>
    </main>
  );
};

export default ContactUs;
