import { motion } from "framer-motion";
import { Element } from "react-scroll";

import fullstack from "../../assets/images/full-stack.jpg";
import dev from "../../assets/images/dev.jpg";
import optimize from "../../assets/images/optimize.jpg";
import responsive from "../../assets/images/mobile.jpg";

const Services = () => {
  return (
    <Element name="services">
      <div
        className="py-40 pb-60 md:max-w-[1440px] mx-auto px-10"
        id="#services"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase">Services</h1>
        <motion.div
          initial={{ y: "-300%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold mb-20">
            4+ Years of experience as Software Engineer
            <br />
          </h2>
          <div className="mt-10 flex flex-wrap justify-center items-start gap-20 w-full">
            <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
              <img src={dev} alt="service" />
              <p className="leading-7">
                <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                  Website Development
                </span>
                I create high-quality websites that align with the
                company&apos;s brand and goals. Focus on creating user-friendly
                interfaces, intuitive navigation, and compelling visuals to
                enhance user engagement and drive conversions.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
              <img src={fullstack} alt="service" />
              <p className="leading-7">
                <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                  Building Full Stack Solutions
                </span>
                I optimize website usability and accessibility for exceptional
                user experiences, increasing customer satisfaction and
                retention.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
              <img src={responsive} alt="service" />
              <p className="leading-7">
                <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                  Creating Mobile Responsive Apps
                </span>
                I specialize in responsive design, creating websites that
                seamlessly adapt to various devices and screen sizes. This
                ensures accessibility and visual appeal across desktops,
                tablets, and mobile devices, catering to a diverse user base.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center md:max-w-[280px]">
              <img src={optimize} alt="service" />
              <p className="leading-7">
                <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                  Performance Optimization:
                </span>
                I optimize websites for fast loading times and smooth
                performance. Through techniques such as code optimization,
                caching, and asset compression, I enhance the user experience,
                boost search engine rankings, and drive organic traffic to the
                site.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Services;
