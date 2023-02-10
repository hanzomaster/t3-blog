import { type NextPage } from "next";
import { useForm } from "react-hook-form";
import Brand from "../../components/Brand";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput, e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    e.target.reset();
    alert(JSON.stringify(data));
  };
  return (
    <div className="h-screen max-w-full">
      <div className="mx-10 h-screen max-w-full bg-white sm:mx-32">
        <div className="flex h-28 max-w-full items-center justify-center">
          <div className="flex items-center justify-between">
            <Brand />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto my-8 flex w-full flex-col gap-4 font-montserrat text-base sm:w-2/3 md:text-lg lg:w-1/3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">User name</label>
            <input
              type="text"
              id="name"
              className="rounded-lg  border border-[#e6e6e6] px-2  py-2 "
              {...register("name", { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="rounded-lg  border border-[#e6e6e6] px-2 py-2 "
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="text-red-600">This field is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="rounded-lg border border-[#e6e6e6] px-2 py-2"
              {...register("password", {
                required: true,

                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters",
                },
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-600">This field is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              className="rounded-lg  border border-[#e6e6e6] px-2 py-2 "
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "The passwords do not match",
              })}
            />
          </div>
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <span className="text-red-600">This field is required</span>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <span className="text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}

          <button
            type="submit"
            className="mt-10 rounded-xl bg-button px-5 py-2 text-lg font-normal text-white md:text-2xl"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
