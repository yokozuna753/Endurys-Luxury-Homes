import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_apm2ieh", // replace with your EmailJS service ID
        "template_u42om8l", // replace with your EmailJS template ID
        formData,
        "aHbG81A4XROTizXwE" // replace with your EmailJS public key
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-16 bg-black text-white mt-18 text-center">
        <h2 className="text-2xl">✅ Thank you!</h2>
        <p className="mt-4">We’ll be in touch with you soon.</p>
      </section>
    );
  }

  return (
    <section className="pt-16 bg-black text-white mt-20">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-10">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First/Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name *"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email/Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="user_email"
              placeholder="Email *"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="street"
              placeholder="Street Address *"
              value={formData.street}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="state"
              placeholder="State *"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code *"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message *"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Disclaimer */}
          <div className="flex items-start space-x-3 text-sm text-gray-400">
            <input
              type="checkbox"
              defaultChecked
              required
              className="mt-1 h-4 w-4 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
            />
            <p>
              I agree to be contacted by Endurys Luxury Homes via call, email,
              and text for Luxury Homes services. To opt out, you can reply
              'stop' at any time.{" "}
              <a href="/privacy" className="underline text-gray-300 hover:text-white">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline text-gray-300 hover:text-white">
                Terms of Service
              </a>
              .
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-white font-medium transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
