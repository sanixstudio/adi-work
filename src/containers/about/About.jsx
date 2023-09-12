import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Element } from "react-scroll";

import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoGraphql,
} from "react-icons/bi";

const About = () => {
  return (
    <Element name="about">
      <div className="md:pt-0 py-20 px-10 bg-gradient-to-b from-slate-300 to-slate-100 flex" id="#about">
        <div className="md:my-20 pb-20 md:pb-40 flex flex-col md:max-w-[1440px] mx-auto">
          <motion.div
            initial={{ x: "-300%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase">About</h1>
            <span>Me</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full md:gap-10 xl:gap-20 2xl:gap-40">
            <motion.div
              initial={{ x: "-300%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-3 md:w-full self-start p-10 bg-gradient-to-t from-[#42444F] to-[#272932] max-w-[420px] mx-auto"
            >
              <img
                width={600}
                height={400}
                src={"/images/adi.jpg"}
                alt="adnan niaz"
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ x: "300%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="self-start w-full"
            >
              <h2 className="mt-28 md:mt-0 text-4xl mb-10 font-bold uppercase">
                A little about myself
              </h2>
              <p className="mb-10 leading-7 text-lg">
                I&apos;m a full-stack software engineer based in the Bay Area. I
                specialize in helping startups grow their businesses by creating
                intuitive and visually appealing user interfaces. With a strong
                foundation in full-stack development from UC Berkeley, I have
                the skills and experience necessary to tackle complex problems
                and bring business ideas to life.
              </p>
              <p className="leading-7 text-lg">
                In my spare time, I am constantly seeking opportunities to learn
                and grow as a developer, including staying up-to-date on the
                latest technologies, working on personal projects, and helping
                others learn to code.
              </p>
              <div>
                <h2 className="text-2xl mt-20 mb-10">Skilled In</h2>
                <div className="flex justify-center md:justify-normal flex-wrap gap-5">
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <AiOutlineHtml5 color="#dd4b25" size={36} />
                    <span className="text-sm">HTML</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoCss3 color="#254BDD" size={36} />
                    <span className="text-sm">CSS</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoJavascript color="#EFD81D" size={36} />
                    <span className="text-sm">JavaScript</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoTypescript color="#2F74C0" size={36} />
                    <span className="text-sm">TypeScript</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoReact color="#5ED3F3" size={36} />
                    <span className="text-sm">React</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <TbBrandNextjs size={36} />
                    <span className="text-sm">Next.js</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoNodejs color="#73AA5D" size={36} />
                    <span className="text-sm">Node.js</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <SiExpress size={36} />
                    <span className="text-sm">Express</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoMongodb color="#52A946" size={36} />
                    <span className="text-sm">MongoDB</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoGraphql color="#DE33A6" size={36} />
                    <span className="text-sm">GraphQl</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
