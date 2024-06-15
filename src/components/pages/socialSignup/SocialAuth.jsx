import React from "react";

const SocialAuth = ({ backgroundColor, icon, alt, text }) => {
  return (
    <div
      className=" flex flex-row gap-[1rem] rounded-lg w-230 pt-225 pl-266 h-[2.5rem]"
      style={{
        background: backgroundColor,
      }}
    >
      <div className="pl-5">
        <img src={icon} alt={alt} className="pt-[0.5rem] " />
      </div>
      <p className="pt-[0.6rem] pl-5 pr-10">{text}</p>
    </div>
  );
};

export default SocialAuth;
