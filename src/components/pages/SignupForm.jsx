const SignupForm = () => {
  return (
    <div className="flex flex-row">
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
    </div>
  );
};

export default SignupForm;
