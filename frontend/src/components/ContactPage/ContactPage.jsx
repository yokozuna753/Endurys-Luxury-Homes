import { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

export default function ContactPage() {
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

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();

  const googleMapsURL = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        "7766 NW 46 ST, Doral, FL, 33166"
      )}`
    : "";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_tsvcmvw", // EmailJS service ID
        "template_407jfow", // replace with your EmailJS template ID
        formData,
        "xlGCx8MegeXMolX_K" // replace with your EmailJS public key
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
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-light">✅ Thank you!</h2>
        <p className="mt-4">We’ll be in touch with you soon.</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-40">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          <h2 className="text-4xl font-light">Contact</h2>

          <div className="space-y-4 text-gray-300">
            <p>📞 (305) 783-7710</p>
            <p>✉️ eespinosa@aedevelopmentplus.com</p>
            <p>📍 7766 NW 46 ST, Doral, Florida, 33166</p>
          </div>

          <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-80 block"
              src={googleMapsURL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        {/* RIGHT COLUMN (EMAILJS FORM) */}
        <form onSubmit={handleSubmit} className="flex flex-col lg:block items-center space-y-4">
          {/* First / Last Name */}
          <div className="md:grid flex flex-col md:grid-cols-2 gap-6">
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              alt="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className={`w-full md:w-full bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
            <input
              type="text"
              name="last_name"
              alt="Last Name"
              placeholder="Last Name *"
              value={formData.last_name}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="user_email"
              alt="Email Address"
              placeholder="Email *"
              value={formData.user_email}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
            <input
              type="tel"
              name="phone"
              alt="Phone Number"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
          </div>

          {/* Address Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="street"
              alt="Street Address"
              placeholder="Street Address *"
              value={formData.street}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
            <input
              type="text"
              name="city"
              alt="City"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="state"
              alt="State"
              placeholder="State *"
              value={formData.state}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
            />
            <input
              type="text"
              name="zip"
              alt="Zip Code"
              placeholder="ZIP Code *"
              value={formData.zip}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
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
            className={`w-full md:w-full rounded-md bg-[#1a1a1a] border border-gray-700 text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]`}
          ></textarea>

          {/* Consent */}
          <div className="flex items-start space-x-3 text-sm text-gray-400">
            <input type="checkbox" defaultChecked required className={`mt-1 h-4 w-4 text-[#C6A15B] focus:ring-[#C6A15B] accent-[#C6A15B]`} />
            <p className="text-gray-400">
              I agree to be contacted via call, email, and text for real estate
              services. To opt out, reply "stop". See our{" "}
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
            className={`bg-[#C6A15B] hover:bg-[#b28f4f] px-8 py-3 rounded-md text-black font-semibold tracking-wide transition hover:cursor-pointer`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </section>
  );
}
