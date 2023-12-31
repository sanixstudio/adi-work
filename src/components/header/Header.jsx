import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { ThemeContext } from "../../context/themeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isDark } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Define variants for the mobile menu animation
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className={`${
        isDark ? "bg-white/20" : "bg-[#1F2937]"
      } backdrop-blur-xl p-4 z-20 fixed top-0 left-0 ring-0 w-full`}
    >
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <span className="text-white text-xl md:text-4xl font-semibold">
              Adnan Niaz
            </span>
          </a>
        </div>

        {/* Nav */}
        <div className="relative flex gap-8">
          <ToggleTheme />
          <span className="block md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? (
              <FiX color="#fff" size={24} />
            ) : (
              <FiMenu color="#fff" size={24} />
            )}
          </span>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link
                to="#home"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#services"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#work"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed top-14 left-0 w-full bg-slate-800 text-white py-10 md:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                <ul className="text-center flex flex-col gap-4">
                  <li>
                    <Link
                      to="#home"
                      smooth={true}
                      className="block py-2 hover:text-gray-300 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#about"
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="block py-2 hover:text-gray-300 cursor-pointer"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#services"
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="block py-2 hover:text-gray-300 cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#work"
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="block py-2 hover:text-gray-300 cursor-pointer"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#contact"
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="block py-2 hover:text-gray-300 cursor-pointer"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
