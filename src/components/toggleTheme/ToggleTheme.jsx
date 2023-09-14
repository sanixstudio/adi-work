import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const ToggleTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="rounded-full px-2 py-1 flex gap-2 items-center focus:outline-none text-white"
      onClick={toggleTheme}
    >
      <AnimatePresence>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiSun color="#F7C70D" fill="#F7C70D" size={20} className="mr-1" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiMoon color="#567fa5" fill="#567fa5" size={20} className="mr-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ToggleTheme;
