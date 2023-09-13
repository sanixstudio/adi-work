import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="rounded-full px-2 py-1 flex gap-2 items-center focus:outline-none text-white"
      onClick={toggleTheme}
    >
      <AnimatePresence>
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiSun size={20} className="mr-1" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiMoon size={20} className="mr-1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* {isDarkMode ? (
        <motion.div
          key="light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Light
        </motion.div>
      ) : (
        <motion.div
          key="dark"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dark
        </motion.div>
      )} */}
    </button>
  );
};

export default ToggleTheme;
