import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Encode helper
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
      <section className="py-16 bg-black text-white mt-12 text-center">
        <h2 className="text-2xl">✅ Thank you!</h2>
        <p className="mt-4">We’ll be in touch with you soon.</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-black text-white mt-12">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-10">Contact Us</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* First/Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email/Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
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

          {/* Comments */}
          <textarea
            name="message"
            placeholder="Message *"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Checkbox Disclaimer */}
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
              'stop' at any time or reply 'help' for assistance. You can also
              click the unsubscribe link in the emails. Message and data rates
              may apply. Message frequency may vary.{" "}
              <a
                href="/privacy"
                className="underline text-gray-300 hover:text-white"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms"
                className="underline text-gray-300 hover:text-white"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
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
