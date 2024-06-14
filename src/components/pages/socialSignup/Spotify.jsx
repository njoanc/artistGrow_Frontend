import React from "react";

const Spotify = ({ backgroundColor }) => {
  return (
    <div
      className=" flex flex-row gap-[1rem] rounded-lg  w-229 pt-279 pl-266 h-[1.8rem]"
      style={{
        background: backgroundColor,
      }}
    >
      <div className="pl-7">
        <img
          src="/assets/shared/spotifyIcon.svg"
          alt="spotify icon"
          className="pt-[0.4rem] h-5"
        />
      </div>
      <p className="pt-[0.3rem]">Signup with Spotify</p>
    </div>
  );
};

export default Spotify;
