import { useContext } from "react";
import footerLogo from "../../assets/images/adi.png";
import { ThemeContext } from "../../context/themeContext";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isDark ? "text-gray-300 bg-slate-900" : "text-slate-400"
      } max-w-screen pt-4 flex flex-col items-center pb-5`}
    >
      <img
        src={footerLogo}
        alt="SanixStudio"
        className="rounded-full bg-slate-300 p-1 m-1 max-w-[60px]"
      />
      <span className="text-xs">&copy;SanixStudio 2023</span>
      <span className="text-xs">Design & Created by SanixStudio</span>
    </div>
  );
};

export default Footer;
