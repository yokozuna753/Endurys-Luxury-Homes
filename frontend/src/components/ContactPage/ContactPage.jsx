import { useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import { parsePhoneNumber } from "libphonenumber-js";
import { postcodeValidator } from "postcode-validator";
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
  const [errors, setErrors] = useState({});
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
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - at least 2 characters
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required.";
    } else if (formData.first_name.trim().length < 2) {
      newErrors.first_name = "First name must be at least 2 characters.";
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required.";
    } else if (formData.last_name.trim().length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters.";
    }

    // Email validation
    if (!formData.user_email) {
      newErrors.user_email = "Email is required.";
    } else if (!validator.isEmail(formData.user_email)) {
      newErrors.user_email = "Invalid email format.";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length < 10 || digitsOnly.length > 11) {
        newErrors.phone = "Phone number must be 10 digits.";
      } else {
        try {
          const phoneNumber = parsePhoneNumber(formData.phone, "US");
          if (!phoneNumber || !phoneNumber.isValid()) {
            newErrors.phone = "Invalid phone number. Try format: XXX-XXX-XXXX";
          }
        } catch (error) {
          newErrors.phone = "Invalid phone number. Try format: XXX-XXX-XXXX";
        }
      }
    }

    // Street validation - must contain at least a number and street name
    if (!formData.street.trim()) {
      newErrors.street = "Street address is required.";
    } else if (formData.street.trim().length < 5) {
      newErrors.street = "Please enter a complete street address.";
    } else if (!/\d/.test(formData.street)) {
      newErrors.street = "Street address must include a street number.";
    }

    // City validation - at least 2 characters, letters only (with spaces/hyphens)
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    } else if (formData.city.trim().length < 2) {
      newErrors.city = "Please enter a valid city name.";
    } else if (!/^[a-zA-Z\s\-'.]+$/.test(formData.city.trim())) {
      newErrors.city = "City name should only contain letters.";
    }

    // State validation - must be 2 letter state code or full state name
    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    } else if (formData.state.trim().length < 2) {
      newErrors.state = "Please enter a valid state.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.state.trim())) {
      newErrors.state = "State should only contain letters.";
    }

    // ZIP validation - must be exactly 5 digits or 5+4 format
    if (!formData.zip) {
      newErrors.zip = "ZIP code is required.";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip.trim())) {
      newErrors.zip = "ZIP code must be 5 digits (e.g., 12345 or 12345-6789).";
    } else if (!postcodeValidator(formData.zip, "US")) {
      newErrors.zip = "Invalid ZIP code.";
    }

    // Message validation - at least 10 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-light">✅ Thank you!</h2>
        <p className="mt-4">We'll be in touch with you soon.</p>
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
            <div>
              <input
                type="text"
                name="first_name"
                placeholder="First Name *"
                alt="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className={`w-full md:w-full bg-[#1a1a1a] border ${
                  errors.first_name ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.first_name ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                alt="Last Name"
                placeholder="Last Name *"
                value={formData.last_name}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.last_name ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.last_name ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="user_email"
                alt="Email Address"
                placeholder="Email *"
                value={formData.user_email}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.user_email ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.user_email ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                alt="Phone Number"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.phone ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Address Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="street"
                alt="Street Address"
                placeholder="Street Address *"
                value={formData.street}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.street ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.street ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">{errors.street}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="city"
                alt="City"
                placeholder="City *"
                value={formData.city}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.city ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.city ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="state"
                alt="State"
                placeholder="State *"
                value={formData.state}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.state ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.state ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="zip"
                alt="Zip Code"
                placeholder="ZIP Code *"
                value={formData.zip}
                onChange={handleChange}
                required
                className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                  errors.zip ? "border-red-500" : "border-gray-700"
                } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.zip ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
                }`}
              />
              {errors.zip && (
                <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full md:w-full rounded-md bg-[#1a1a1a] border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-[#C6A15B]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

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
            className={`bg-[#C6A15B] hover:bg-[#b28f4f] px-8 py-3 rounded-md text-black font-semibold tracking-wide transition hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </section>
  );
}