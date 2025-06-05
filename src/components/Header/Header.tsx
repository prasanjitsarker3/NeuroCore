"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathName = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const links = [
    {
      id: 2,
      title: "Integrations",
      slag: "/integrations",
    },
    {
      id: 1,
      title: "About",
      slag: "/about",
    },
    {
      id: 4,
      title: "Contact",
      slag: "/contact",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#060f11]">
        <nav className="container max-w-6xl mx-auto py-5 px-2 flex items-center justify-between gap-16 border-b border-[#c2f3a92a]">
          <div className="w-full flex justify-between items-center gap-8">
            <Link className="w-28 md:w-32" href="/">
              <figure>
                <Image
                  src={"/Wevlover.webp"}
                  height={20}
                  width={130}
                  alt="Logo"
                />
              </figure>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center gap-2">
              {links.map((menu) => (
                <motion.div
                  key={menu.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className={`px-5 py-1.5 rounded-2xl transition-all duration-500 text-sm font-semibold whitespace-nowrap uppercase relative ${
                      pathName === menu.slag
                        ? "text-[#FF5F1F] bg-[#FF5F1F]/10"
                        : "text-white hover:text-[#FF5F1F]"
                    }`}
                    href={menu.slag}
                  >
                    {menu.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className=" hidden md:block">
                <motion.button
                  className="bg-white/5 border border-white/5 text-white hover:bg-[#FF5F1F] transition-all duration-500 cursor-pointer px-4 py-0.5 rounded-full text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Appointment
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-white p-2"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-[#060f11] z-50 md:hidden border-r border-[#c2f3a92a]"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.5,
              }}
            >
              <div className="p-6">
                {/* Logo */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Link href="/" onClick={closeMobileMenu}>
                    <Image
                      src={"/Wevlover.webp"}
                      height={20}
                      width={130}
                      alt="Logo"
                    />
                  </Link>
                </motion.div>

                {/* Navigation Links */}
                <nav className=" space-y-3 md:space-y-4">
                  {links.map((menu, index) => (
                    <motion.div
                      key={menu.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 * (index + 1),
                        duration: 0.4,
                      }}
                    >
                      <Link
                        className={`block px-2 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-300 text-base font-semibold uppercase relative overflow-hidden ${
                          pathName === menu.slag
                            ? "text-[#FF5F1F] bg-[#FF5F1F]/10 border border-[#FF5F1F]/20"
                            : "text-white hover:text-[#FF5F1F] hover:bg-white/5"
                        }`}
                        href={menu.slag}
                        onClick={closeMobileMenu}
                      >
                        <motion.span
                          className="relative z-10"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {menu.title}
                        </motion.span>
                        {pathName === menu.slag && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF5F1F]"
                            layoutId="activeMobileTab"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Appointment Button */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <motion.button
                    className="w-full bg-[#FF5F1F] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:bg-[#FF5F1F]/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                  >
                    Book Appointment
                  </motion.button>
                </motion.div>

                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 text-white p-2 hover:text-[#FF5F1F] transition-colors duration-300"
                  onClick={closeMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
