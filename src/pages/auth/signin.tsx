import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from "next";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn
} from "next-auth/react";
import { type FormEvent } from "react";

import Brand from "../../components/Brand";
import Layout from "../../components/Layout";

function SignIn({
  providers,
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //sign in with google

  return (
    <Layout>
      <div className="flex h-28 max-w-full items-center justify-center">
        <div className="flex items-center justify-between">
          {/* <Image
              src="/logo.png"
              alt="logo"
              className="object-cover "
              width={100}
              height={100}
            />
            <h1 className="font-pacifico text-4xl not-italic leading-[7rem] text-black/80 md:text-6xl">
              Infinity
            </h1> */}
          <Brand />
        </div>
      </div>
      <form
        className="m-auto my-8 flex w-full flex-col gap-4 font-montserrat text-base sm:w-2/3 md:text-lg lg:w-1/3"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          void signIn("credentials", {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
          });
        }}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
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
          Sign in
        </button>
      </form>
      <div>
        <span className="flex justify-center">Or</span>
        <div className="mt-5 flex flex-col gap-2">
          {/* <button onClick={handleLoginGithub}>Sign in with Github</button> */}
          {providers.map((provider) => (
            <button
              key={provider.name}
              onClick={() => void signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  if (!providers) {
    return { notFound: true };
  }
  return {
    props: {
      providers: Object.values(providers) ?? [],
      csrfToken: await getCsrfToken(context),
    },
  };
}
