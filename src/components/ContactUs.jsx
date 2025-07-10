import { useRef, useState } from "react";

const ContactUs = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  // Replace with your EmailJS service details or use your backend endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Example using EmailJS (you must set up your own account and template)
    const formData = new FormData(formRef.current);
    const data = {
      service_id: "service_6jybba9",
      template_id: "template_yaup53k",
      user_id: "2IuW0Sj0bTx8RGlan",
      template_params: {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      },
    };
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("Message sent!");
      formRef.current.reset();
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">
        Contact {" "}
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
            <a href="mailto:teamintrovera@gmail.com" className="ml-2 text-blue-600 ">teamintrovera@gmail.com</a>
          </div>
          <div className="mb-4">
            <span className="font-medium">Phone:</span>
            <a href="tel:+1234567890" className="ml-2 text-blue-600 ">+94 6782 225</a>
          </div>
          <div className="mb-4">
            <span className="font-medium">Address:</span>
            <span className="ml-2">kaduwela</span>
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
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
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
    </div>
  );
};

export default ContactUs;