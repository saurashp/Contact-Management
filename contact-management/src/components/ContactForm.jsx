import { useState } from "react";
import Input from "./Input";

const API_URL = "http://localhost:5000/api/contacts";

function ContactForm({ contacts, setContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValid =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    (form.email === "" || form.email.includes("@"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setError("Name and Phone are required. Email must be valid.");
      return;
    }

    try {
      setError("");
      setSuccess("");

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      setContacts((prev) => [data, ...prev]);
      setSuccess("Contact added successfully ✅");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError("Backend not reachable");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid grid-cols-4 gap-2 mb-2">
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name *"
        />
        <Input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone *"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={1}
          className="w-full border p-2 text-sm rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="px-6 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        Submit
      </button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
    </form>
  );
}

export default ContactForm;
