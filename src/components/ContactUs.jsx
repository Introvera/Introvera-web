"use client";

import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ContactUs = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  // Intersection Observer for lazy load
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(formRef.current);
    const fromName = formData.get("name");
    const fromEmail = formData.get("email");
    const message = formData.get("message");

    const headers = { "Content-Type": "application/json" };

    // Send to YOU (contact form)
    const contactData = {
      service_id: "service_6jybba9",
      template_id: "template_yaup53k",
      user_id: "2IuW0Sj0bTx8RGlan",
      template_params: {
        from_name: fromName,
        from_email: fromEmail,
        message: message,
      },
    };

    // Auto-reply to USER
    const autoReplyData = {
      service_id: "service_6jybba9",
      template_id: "template_2expv74",
      user_id: "2IuW0Sj0bTx8RGlan",
      template_params: {
        to_name: fromName,
        to_email: fromEmail,
      },
    };

    try {
      // First: send contact message to you
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers,
        body: JSON.stringify(contactData),
      });

      // Then: send auto-reply to user
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers,
        body: JSON.stringify(autoReplyData),
      });

      setStatus("Message sent!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <div ref={ref} className="max-w-5xl mx-auto py-16 px-4" id="contact">
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
              Us
            </span>
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            {/* Get in Touch */}
            <div className="flex-1 bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="mb-4">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:teamintrovera@gmail.com"
                  className="ml-2 text-blue-600"
                >
                  teamintrovera@gmail.com
                </a>
              </div>
              <div className="mb-4">
                <span className="font-medium">Phone:</span>
                <a href="tel:+1234567890" className="ml-2 text-blue-600">
                  +94 6782 225
                </a>
              </div>
              <div className="mb-4">
                <span className="font-medium">Address:</span>
                <span className="ml-2">Kaduwela</span>
              </div>
              <div className="mb-4">
                <span className="font-medium">Location:</span>
                <div className="mt-2 rounded-lg overflow-hidden">
                  <iframe
                    title="Introvera Location"
                    src="https://www.google.com/maps?q=6.949028,79.991667&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Send a Message */}
            <div className="flex-1 bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border rounded-md px-4 py-2 bg-neutral-100 dark:bg-neutral-800"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border rounded-md px-4 py-2 bg-neutral-100 dark:bg-neutral-800"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="border rounded-md px-4 py-2 bg-neutral-100 dark:bg-neutral-800"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-800 text-white py-3 px-6 rounded-md font-semibold"
                >
                  Send Message
                </button>
                {status && <p className="text-center mt-2">{status}</p>}
              </form>
            </div>
          </div>
        </motion.div>
      ) : (
        <div style={{ minHeight: "600px" }} />
      )}
    </div>
  );
};

export default ContactUs;
