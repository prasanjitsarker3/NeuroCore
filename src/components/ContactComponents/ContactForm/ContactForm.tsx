"use client";

import type React from "react";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="w-full md:w-1/2 px-5 py-3.5 rounded-xl bg-[#141d1f] font-robotoMono tracking-tighter placeholder:text-gray-400 font-medium text-[#ff5f1f] outline-0"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          className="w-full md:w-1/2 px-5 py-3.5 rounded-xl bg-[#141d1f] font-robotoMono tracking-tighter placeholder:text-gray-400 font-medium text-[#ff5f1f] outline-0"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <textarea
        rows={10}
        className="w-full px-5 py-3.5 rounded-xl bg-[#141d1f] font-robotoMono tracking-tighter placeholder:text-gray-400 text-[#ff5f1f] font-medium outline-0"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      ></textarea>
      <input
        className="w-full px-5 py-3.5 rounded-full bg-[#FF5F1F] font-robotoMono tracking-tighter placeholder:text-white text-white uppercase text-sm transition-colors duration-300 cursor-pointer font-medium outline-0 hover:bg-[#e5541c]"
        type="submit"
        value="Send Message"
      />
    </form>
  );
};

export default ContactForm;
