import footerLogo from "../../assets/images/adi.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center max-w-[400px] mx-auto pb-10">
      <img
        src={footerLogo}
        alt="SanixStudio"
        className="rounded-full bg-slate-300 p-1 m-1 max-w-[60px]"
      />
      <span className="text-slate-400 text-xs">&copy;SanixStudio 2023</span>
      <span className="text-slate-400 text-xs">
        Design & Created by SanixStudio
      </span>
    </div>
  );
};

export default Footer;
