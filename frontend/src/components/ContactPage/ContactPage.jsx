import { useState } from "react";
import Footer from "../Footer/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();


  const googleMapsURL = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent("7766 NW 46 ST, Doral, FL, 33166")}`
    : "";

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setSubmitted(true);
    } catch (error) {
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

          {/* MAP PLACEHOLDER */}
          <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
            {/* Replace this with Google Maps API integration */}
            <iframe
              className="w-full h-80"
              src={googleMapsURL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        {/* RIGHT COLUMN (FORM) */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-12"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* First / Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3"
            />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3"
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
            className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3"
          ></textarea>

          {/* Best Time */}
          {/* <div className="flex gap-6 text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> am
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> pm
            </label>
          </div> */}

          {/* Disclaimer */}
          <div className="flex items-start space-x-3 text-sm text-gray-400">
            <input
              type="checkbox"
              defaultChecked
              required
              className="mt-1 h-4 w-4"
            />
            <p>
              I agree to be contacted via call, email, and text for real estate
              services. To opt out, reply "stop". See our{" "}
              <a href="/privacy" className="underline text-gray-300">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline text-gray-300">
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
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Footer />w
    </section>
  );
}
