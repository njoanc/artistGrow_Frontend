import SharedButton from "../shared/SharedButton";
import SharedParagraph from "../shared/SharedParagraph";
import LoginForm from "./LoginForm";
import SocialAuth from "./socialSignup/SocialAuth";
const backgroundColor =
  "linear-gradient(to right, #1DB954, #191414F2 25%, #1DB954 50%, #191414F2 75%, #191414F2)";

const Login = () => {
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
          className="pt-[3rem] pl-[25rem]"
        />
        <div className="text-white font-gotham text-center">
          <h1 className="  tracking-[0.05rem] text-3xl">
            Welcome to Artist Grow
          </h1>
          <p className="text-sm text-[gray]">
            Contribute to the growth of your favourite artists{" "}
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center px-[21rem] pt-[3.5rem] text-xs text-white border-spacing-2 gap-[2rem]">
          <SocialAuth
            backgroundColor={backgroundColor}
            alt="google icon"
            icon="/assets/shared/googleIcon.svg"
            text="Sign in with Google"
          />
          <SocialAuth
            backgroundColor={backgroundColor}
            alt="spotify icon"
            icon="/assets/shared/spotifyIcon.svg"
            text="Sign in with Spotify"
          />
          <SocialAuth
            backgroundColor={backgroundColor}
            alt="facebook icon"
            icon="/assets/shared/facebookIcon.svg"
            text="Sign in with Facebook"
          />
        </div>
        <LoginForm />
        <div className=" flex justify-center items-center uppercase  pt-5">
          <SharedButton buttonText="Sign in" />
        </div>
        <div className="text-xs flex justify-center items-center pt-[2rem]">
          <SharedParagraph link="/" p="New user?" navigate="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Login;
