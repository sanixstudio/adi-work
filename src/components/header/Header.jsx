import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define variants for the mobile menu animation
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <span className="text-white text-xl md:text-4xl font-semibold">
              Adnan Niaz
            </span>
          </a>
        </div>

        {/* Nav */}
        <div className="relative">
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
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#Services" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="text-white hover:text-gray-300">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed top-14 left-0 w-full bg-blue-500 text-white py-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                <ul className="text-center">
                  <li>
                    <a href="/" className="block py-2 hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block py-2 hover:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block py-2 hover:text-gray-300"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#work" className="block py-2 hover:text-gray-300">
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 hover:text-gray-300"
                    >
                      Contact
                    </a>
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
