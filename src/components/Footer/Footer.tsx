"use client";

import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#060f11] text-white px-3 md:px-0">
      <div className="font-robotoMono max-w-6xl mx-auto px-2 pt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5  gap-4 md:gap-10">
          <div>
            <Link href="/">
              <figure>
                <Image
                  className="cursor-pointer"
                  src={"/Wevlover.webp"}
                  alt="Logo"
                  width={100}
                  height={20}
                />
              </figure>
            </Link>
            <div className="flex gap-3 text-sm pt-6">
              <a
                className="transition-colors duration-500 text-gray-400 hover:text-[#adff85]"
                href="#"
                aria-label="X"
              >
                <SiX />
              </a>
              <a
                className="transition-colors duration-500 text-gray-400 hover:text-[#adff85]"
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                className="transition-colors duration-500 text-gray-400 hover:text-[#adff85]"
                href="#"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                className="transition-colors duration-500 text-gray-400 hover:text-[#adff85]"
                href="#"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div>
            <h2 className="text-sm font-bold text-mainColor mb-6">PRODUCT</h2>
            <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="#"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-mainColor mb-6">COMPANY</h2>
            <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="#"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-mainColor mb-6">RESOURCES</h2>
            <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="/terms-of-service"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="privacy-policy"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-mainColor mb-6">
              DEVELOPERS
            </h2>
            <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="#"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors duration-500 text-gray-400 hover:text-gray-50"
                  href="#"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col-reverse md:flex-row gap-4 justify-between items-center border-t border-gray-500 py-6">
          <p className="text-gray-200 tracking-tight text-sm">
            © 2025 Wevloper. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#adff85] inline-block"></span>
            <span className="text-gray-200 tracking-tight text-sm">
              System Status
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
