import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { MdDeveloperMode } from "react-icons/md";
import { TbStack3 } from "react-icons/tb";
import { GrOptimize } from "react-icons/gr";

import mobileFriendly from "../../assets/images/mobile-friendly.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const Services = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Element name="services">
      <div className={`${isDark ? "bg-slate-700" : ""}`}>
        <div
          className={`${
            isDark ? "text-white" : ""
          }flex flex-col justify-center py-40 pb-60 md:max-w-[1440px] min-h-screen mx-auto px-10`}
          id="#services"
        >
          <h1
            className={`text-4xl md:text-6xl font-bold uppercase ${
              isDark ? "text-white" : ""
            }`}
          >
            Services
          </h1>
          <motion.div
            initial={{ y: "-300%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-20"
          >
            <h2
              className={`text-4xl font-bold mb-20 ${
                isDark ? "text-white" : ""
              }`}
            >
              4+ Years of experience as Software Engineer
              <br />
            </h2>
            <div
              className={`mt-10 flex flex-wrap justify-center items-start gap-20 w-full`}
            >
              <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
                <MdDeveloperMode size={64} />
                <p className="leading-7">
                  <span
                    className={`text-center tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block ${
                      isDark ? "text-white" : ""
                    }`}
                  >
                    Web Application Development
                  </span>
                  <span className={`${isDark ? "text-gray-300" : ""}`}>
                    I create high-quality websites that align with the
                    company&apos;s brand and goals. Focus on creating
                    user-friendly interfaces, intuitive navigation, and
                    compelling visuals to enhance user engagement and drive
                    conversions.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
                <TbStack3 size={64} />
                <p className="leading-7">
                  <span
                    className={`text-center tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block ${
                      isDark ? "text-white" : ""
                    }`}
                  >
                    Building Full Stack Solutions
                  </span>
                  <span className={`${isDark ? "text-gray-300" : ""}`}>
                    Mastering both front-end and back-end, I create end-to-end
                    solutions. Crafting captivating interfaces and efficient
                    server systems, I fuse creativity with functionality for
                    impactful digital solutions.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
                <GrOptimize size={64} />
                <p className="leading-7">
                  <span
                    className={`text-center tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block ${
                      isDark ? "text-white" : ""
                    }`}
                  >
                    Performance Optimization:
                  </span>
                  <span className={`${isDark ? "text-gray-300" : ""}`}>
                    I optimize websites for fast loading times and smooth
                    performance. Through techniques such as code optimization,
                    caching, and asset compression, I enhance the user
                    experience, boost search engine rankings, and drive organic
                    traffic to the site.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
                <img src={mobileFriendly} alt="service" />
                <p className="leading-7">
                  <span
                    className={`text-center tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block ${
                      isDark ? "text-white" : ""
                    }`}
                  >
                    Creating Mobile Responsive Apps
                  </span>
                  <span className={`${isDark ? "text-gray-300" : ""}`}>
                    I specialize in responsive design, creating websites that
                    seamlessly adapt to various devices and screen sizes. This
                    ensures accessibility and visual appeal across desktops,
                    tablets, and mobile devices, catering to a diverse user
                    base.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
