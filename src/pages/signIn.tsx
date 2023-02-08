import { type NextPage } from "next";
import Image from "next/image";

const SignIn: NextPage = () => {
  //sign in with google

  return (
    <div className="h-screen max-w-full">
      <div className="mx-10 h-screen max-w-full bg-white py-10 sm:mx-32">
        <div className="flex h-28 max-w-full items-center justify-center">
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="logo"
              className="object-cover "
              width={100}
              height={100}
            />
            <h1 className="font-pacifico text-4xl not-italic leading-[7rem] text-black/80 md:text-6xl">
              Infinity
            </h1>
          </div>
        </div>
        <form className="m-auto my-8 flex w-full flex-col gap-4 font-montserrat text-base sm:w-2/3 md:text-lg lg:w-1/3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="rounded-lg  border border-[#e6e6e6] px-2  py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="rounded-lg  border border-[#e6e6e6] px-2  py-2 "
            />
          </div>
          <button
            type="submit"
            className="mt-5 rounded-xl bg-button px-5 py-2 text-lg font-normal text-white md:text-2xl"
          >
            Sign In
          </button>
        </form>
        <div>
          <span>Or</span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
