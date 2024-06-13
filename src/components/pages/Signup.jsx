const backgroundColor =
  "linear-gradient(to right, #1DB954, #191414F2 25%, #1DB954 50%, #191414F2 75%, #191414F2)";

const Signup = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 flex justify-center items-center h-screen">
        <img
          src="/assets/shared/signupIcon.svg"
          alt="signup"
          className="px-[5rem] py-[7rem]"
        />
      </div>
      <div className="w-1/2 h-screen bg-darkBlack">
        <img
          src="/assets/shared/icon.svg"
          alt="icon"
          className="pt-[3rem] px-[20rem]"
        />
        <div className="text-white font-gotham text-center">
          <h1 className="  tracking-[0.05rem] text-3xl">
            Welcome to Artist Grow
          </h1>
          <p className="text-sm text-[gray]">
            Contribute to the growth of your favourite artists{" "}
          </p>
        </div>
        <div className=" flex flex-col px-[16rem] pt-[3.5rem] text-xs text-white border-spacing-2 gap-[2rem]">
          <div
            className=" flex flex-row gap-[1rem] rounded-lg w-229 pt-225 pl-266 h-[1.8rem]"
            style={{
              background: backgroundColor,
            }}
          >
            <div className="pl-7">
              <img
                src="/assets/shared/googleIcon.svg"
                alt="google icon"
                className="pt-[0.4rem] h-5"
              />
            </div>

            <p className="pt-[0.3rem]">Signup with Google</p>
          </div>
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
          <div
            className=" flex flex-row gap-[1rem] rounded-lg w-229 pt-279 pl-266 h-[1.8rem]"
            style={{
              background: backgroundColor,
            }}
          >
            <div className="pl-7">
              <img
                src="/assets/shared/facebookIcon.svg"
                alt="facebook icon"
                className=" pt-[0.4rem] h-5"
              />
            </div>

            <p className="pt-[0.3rem]">Signup with Facebook</p>
          </div>
        </div>
        <form
          action="submit"
          className="text-xs border-spacing-1  text-white pl-[13rem] pt-[3.5rem]"
        >
          <div className="pb-[2rem]">
            <div className="flex flex-row gap-3">
              <img src="/assets/person.svg" alt="person icon" />
              <input
                type="text"
                placeholder="Full name"
                className="bg-darkBlack w-[20rem] h-5 pl-2"
              />
            </div>
            <hr className="w-[21.5rem] h-[1px] bg-[gray]" />
          </div>
          <div className="pb-[2rem]">
            <div className="flex flex-row gap-3">
              <img src="/assets/shared/email.svg" alt="email icon" />
              <input
                type="text"
                placeholder="Email address"
                className="bg-darkBlack w-[20rem] h-5 pl-3"
              />
            </div>
            <hr className="w-[21.5rem] h-[1px] bg-[gray]" />
          </div>
          <div className="pb-[2rem]">
            <div className="flex flex-row gap-3">
              <img src="/assets/shared/password.svg" alt="password icon" />
              <input
                type="text"
                placeholder="Password"
                className="bg-darkBlack w-[20rem] h-5 pl-3"
              />
            </div>
            <hr className="w-[21.5rem] h-[1px] bg-[gray]" />
          </div>
          <div className="pb-[2rem]">
            <div className="flex flex-row gap-3">
              <img src="/assets/shared/password.svg" alt="password icon" />
              <input
                type="text"
                placeholder="Confirm Password"
                className="bg-darkBlack w-[20rem] h-5 pl-3"
              />
            </div>
            <hr className="w-[21.5rem] h-[1px] bg-[gray]" />
          </div>
        </form>
        <div className=" flex justify-center items-center uppercase ">
          <button
            type="submit"
            className="bg-white rounded-lg px-4 py-2 hover:bg-ligthGreen hover:text-white"
          >
            Sign up
          </button>
        </div>
        <div className="text-xs flex justify-center items-center pt-[2rem]">
          <p className="text-[gray]">
            Existing user?{" "}
            <span className="underline text-ligthGreen hover:text-white">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
