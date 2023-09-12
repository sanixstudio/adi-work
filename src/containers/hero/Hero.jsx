import { Button } from "flowbite-react";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import imageSrc from "../../assets/images/adi2.jpg";

const Hero = () => {
  return (
    <div className="flex text-center px-4 flex-col justify-center w-full my-10 md:my-0 items-center h-screen md:min-h-[calc(100vh-72px)]">
      <img
        src={imageSrc}
        alt="Adnan Niaz"
        className="w-[200px] h-[200px] object-cover rounded-full mb-5"
      />
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:8xl uppercase py-4 border-b border-gray-300 font-bold">
        I&apos;m Adnan Niaz
      </h1>
      <h2 className="text-2xl sm:text-4xl py-2 font-bold">
        Full Stack Developer & Front End Specialist
      </h2>
      <p className="hidden sm:block sm:text-xl pt-10 max-w-4xl leading-8">
        I engineer captivating user experiences, merging innovation and
        full-stack expertise to realize your digital vision.
      </p>
      <div className="flex flex-col sm:mt-10 sm:flex-row justify-center gap-3 my-5 w-full md:w-fit">
        <Button size={"lg"} color="dark">
          <div className="flex items-center justify-center gap-3">
            <span>
              <BsFillGearFill />
            </span>
            <span>My Projects</span>
          </div>
        </Button>
        <Button size={"lg"} outline color="dark">
          <div className="flex items-center justify-center gap-3">
            <span>
              <AiOutlineMail />
            </span>
            <span>Contact</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
