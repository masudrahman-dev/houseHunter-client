/* eslint-disable react/prop-types */

const Input = ({ type, name, text, register, isRequired, error }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text}
      </label>
      <input
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
          error ? "border-red-500" : "" // Add a red border when there's an error
        }`}
        placeholder={`Type ${text}`}
        type={type}
        {...register(`${name}`, {
          required: isRequired ? `${text} is required.` : false,
        })}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{" "}
      {/* Display the error message */}
    </div>
  );
};

export default Input;
