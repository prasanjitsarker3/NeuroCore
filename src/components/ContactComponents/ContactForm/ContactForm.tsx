"use client";

import type React from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === "success" || status === "error") {
      timer = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 4000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const templateParams = {
      title: "Contact Request",
      name: formData.fullName,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormData({ fullName: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  const renderSubmitButton = () => {
    switch (status) {
      case "loading":
        return (
          <button
            className="w-full px-5 py-3.5 rounded-full bg-[#FF5F1F] font-robotoMono tracking-tighter text-white uppercase text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
            disabled
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </button>
        );
      case "success":
        return (
          <div className="w-full px-5 py-3.5 rounded-full bg-green-600 font-robotoMono tracking-tighter text-white uppercase text-sm flex items-center justify-center">
            Message Sent Successfully!
          </div>
        );
      case "error":
        return (
          <div className="w-full px-5 py-3.5 rounded-full bg-red-600 font-robotoMono tracking-tighter text-white uppercase text-sm flex items-center justify-center">
            {errorMessage}
          </div>
        );
      default:
        return (
          <input
            className="w-full px-5 py-3.5 rounded-full bg-[#FF5F1F] font-robotoMono tracking-tighter placeholder:text-white text-white uppercase text-sm transition-colors duration-300 cursor-pointer font-medium outline-0 hover:bg-[#e5541c]"
            type="submit"
            value="Send Message"
          />
        );
    }
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
      {/* <input
        className="w-full px-5 py-3.5 rounded-full bg-[#FF5F1F] font-robotoMono tracking-tighter placeholder:text-white text-white uppercase text-sm transition-colors duration-300 cursor-pointer font-medium outline-0 hover:bg-[#e5541c]"
        type="submit"
        value="Send Message"
      /> */}
      {renderSubmitButton()}
    </form>
  );
};

export default ContactForm;
