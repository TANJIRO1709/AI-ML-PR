import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/app/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[90vw] p-3 text-2xl">
          Ready to  <span className="text-purple">Interact</span> and Collaborate
        
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-2xl">
          Reach out to me today and let&apos;s discuss how we can collaborate and grow together.
        </p>
        <a href="mailto: sujalnitrkl0596@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light p-10">
          Copyright © 2024 Sujal Kumar Agarwal
        </p>

        <div className="flex items-center md:gap-3 gap-6 p-10">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
             <a href={info.link}> <img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;