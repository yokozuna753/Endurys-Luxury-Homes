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
        "service_tsvcmvw",
        "template_407jfow",
        formData,
        "xlGCx8MegeXMolX_K"
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
      <section className="section-spacing bg-black text-white text-center">
        <h2 className="text-2xl">✅ Thank you!</h2>
        <p className="mt-4">We’ll be in touch with you soon.</p>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-black text-white">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-10 text-white">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="first_name" placeholder="First Name *" value={formData.first_name} onChange={handleChange} />
            <Input name="last_name" placeholder="Last Name *" value={formData.last_name} onChange={handleChange} />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="user_email" type="email" placeholder="Email *" value={formData.user_email} onChange={handleChange} />
            <Input name="phone" type="tel" placeholder="Phone *" value={formData.phone} onChange={handleChange} />
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="street" placeholder="Street Address *" value={formData.street} onChange={handleChange} />
            <Input name="city" placeholder="City *" value={formData.city} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="state" placeholder="State *" value={formData.state} onChange={handleChange} />
            <Input name="zip" placeholder="ZIP Code *" value={formData.zip} onChange={handleChange} />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message *"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-[#1a1a1a] border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
          ></textarea>

          {/* Consent */}
          <div className="flex items-start space-x-3 text-sm text-gray-400">
            <input
              type="checkbox"
              defaultChecked
              required
              className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#1a1a1a] text-[#C6A15B] focus:ring-[#C6A15B] accent-[#C6A15B]"
            />
            <p>
              I agree to be contacted by Endurys Luxury Homes via call, email,
              and text. To opt out, reply 'stop' at any time.{" "}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#C6A15B] hover:bg-[#b28f4f] px-8 py-3 rounded-md text-black font-semibold tracking-wide transition hover:cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ name, placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full rounded-md bg-[#1a1a1a] border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
    />
  );
}
