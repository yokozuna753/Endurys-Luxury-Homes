import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import { isValidPhoneNumber } from "libphonenumber-js";
import { postcodeValidator } from "postcode-validator";
import { Autocomplete } from "@react-google-maps/api";

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
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const autocompleteRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();

    if (place && place.address_components) {
      const components = place.address_components;
      const get = (type) =>
        components.find((c) => c.types.includes(type))?.long_name || "";

      setFormData({
        ...formData,
        street: `${get("street_number")} ${get("route")}`.trim(),
        city: get("locality"),
        state: get("administrative_area_level_1"),
        zip: get("postal_code"),
      });

      // Clear errors for auto-filled fields
      setErrors({
        ...errors,
        street: "",
        city: "",
        state: "",
        zip: "",
      });
    }
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
    } else if (!isValidPhoneNumber(formData.phone, "US")) {
      newErrors.phone = "Invalid phone number. Try in this format: XXX-XXX-XXXX ";
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
      <section className="section-spacing bg-black text-white text-center">
        <h2 className="text-2xl">✅ Thank you!</h2>
        <p className="mt-4">We'll be in touch with you soon.</p>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-black text-white">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light mb-10 text-[#b28f4f]">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="lg:w-full lg:block flex flex-col inner-spacing items-center"
        >
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="first_name"
              placeholder="First Name *"
              value={formData.first_name}
              onChange={handleChange}
              error={errors.first_name}
            />
            <Input
              name="last_name"
              placeholder="Last Name *"
              value={formData.last_name}
              onChange={handleChange}
              error={errors.last_name}
            />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="user_email"
              type="email"
              placeholder="Email *"
              value={formData.user_email}
              onChange={handleChange}
              error={errors.user_email}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          {/* Address with Google Autocomplete */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <Autocomplete
                onLoad={(ref) => (autocompleteRef.current = ref)}
                onPlaceChanged={handlePlaceChanged}
                options={{
                  types: ["address"],
                  componentRestrictions: { country: "us" },
                }}
              >
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Street Address *"
                  required
                  className={`w-full rounded-md bg-[#1a1a1a] border px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.street
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:ring-[#C6A15B]"
                  }`}
                />
              </Autocomplete>
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">{errors.street}</p>
              )}
            </div>
            <Input
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="state"
              placeholder="State *"
              value={formData.state}
              onChange={handleChange}
              error={errors.state}
            />
            <Input
              name="zip"
              placeholder="ZIP Code *"
              value={formData.zip}
              onChange={handleChange}
              error={errors.zip}
            />
          </div>

          {/* Message */}
          <div className="w-full">
            <textarea
              name="message"
              placeholder="Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full lg:w-full rounded-md bg-[#1a1a1a] border px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-700 focus:ring-[#C6A15B]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

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
            className="bg-[#C6A15B] hover:bg-[#b28f4f] px-8 py-3 rounded-md text-black font-semibold tracking-wide transition hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ name, placeholder, value, onChange, type = "text", error }) {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        alt={placeholder}
        value={value}
        onChange={onChange}
        required
        className={`w-full rounded-md bg-[#1a1a1a] border px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-700 focus:ring-[#C6A15B]"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}