const LoginForm = () => {
  return (
    <div className="flex flex-row text-white font-gotham text-center">
      <form
        action="submit"
        className="text-s border-spacing-1  text-white pl-[15rem] pt-[3.5rem] "
      >
        <div className="pb-[3rem]">
          <div className="flex flex-row gap-3">
            <img src="/assets/shared/email.svg" alt="email icon" />
            <input
              type="text"
              placeholder="Email address"
              className="bg-[hsl(0,6%,14%)] w-[25rem] h-6 pl-3"
            />
          </div>
          <hr className="w-[27.5rem] h-[1px] bg-[gray]" />
        </div>
        <div className="pb-[2rem]">
          <div className="flex flex-row gap-3">
            <img src="/assets/shared/password.svg" alt="password icon" />
            <input
              type="text"
              placeholder="Password"
              className="bg-[hsl(0,6%,14%)] w-[25rem] h-6 pl-3"
            />
          </div>
          <hr className="w-[27.5rem] h-[1px] bg-[gray]" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
