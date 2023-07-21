import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Form = ({
  userFullName,
  userEmail,
  userPassword,
  userRole,
  userPhoneNumber,
  variant,
  text,
  handler,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Masud Rahman",
      role: "House Owner",
      phoneNumber: "01704445275",
      email: "masudrahman.dev@gmail.com",
      password: "asd",
    },
  });

  const onSubmit = (data) => {
    handler(data);
  };

  return (
    <div className="max-w-md mt-20 mx-auto px-4 py-6 bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-6">User {text}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {userFullName && (
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: true })}
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.fullName && <span>This field is required</span>}
          </div>
        )}

        {userRole && (
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role:
            </label>
            <select
              id="role"
              name="role"
              {...register("role", { required: true })}
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="House Owner">House Owner</option>
              <option value="House Renter">House Renter</option>
            </select>
          </div>
        )}
        {userPhoneNumber && (
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              {...register("phoneNumber", { required: true })}
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
        {userEmail && (
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
        {userPassword && (
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { required: true })}
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
        {variant === "login" ? (
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        )}
      </form>
      <p>
        if you are new, go to{" "}
        <NavLink className={"underline"} to="/register">
          Register
        </NavLink>
      </p>
      <p>
        if Already have Account, go to{" "}
        <NavLink className={"underline"} to="/login">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Form;
