import Google from "./socialSignup/Google";
import Spotify from "./socialSignup/Spotify";
import SignupWithFacebook from "./socialSignup/SignupWithFacebook";
import SignupForm from "./SignupForm";

const backgroundColor =
  "linear-gradient(to right, #1DB954, #191414F2 25%, #1DB954 50%, #191414F2 75%, #191414F2)";

const Home = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 flex justify-center items-center h-screen">
        <img
          src="/assets/shared/signupIcon.svg"
          alt="signup"
          className="px-[5rem] py-[2rem]"
        />
      </div>
      <div className="w-1/2  bg-darkBlack h-screen">
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
          <Google backgroundColor={backgroundColor} />
          <Spotify backgroundColor={backgroundColor} />
          <SignupWithFacebook backgroundColor={backgroundColor} />
        </div>
        <SignupForm />
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

export default Home;
