import { useForm } from "react-hook-form";
import Input from "./Input";
import axios from "axios";

const CRUDForm = () => {
  const handleFormSubmit = async (data) => {
    const selectedImage = data.picture[0];

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const apiKey = "0101dce25dca2582ca3eb5d090722a8c"; // Replace this with your actual imgbb API key
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData
      );

      if (response.data && response.data.data && response.data.data.url) {
        // console.log("Image URL:", response.data.data.url);
        data.picture = response.data.data.url;

        axios
          .post(
            `${import.meta.env.VITE_BASE_URL}/api/houses`,
            data
          )
          .then((response) => {
            // Handle the response data here if needed
            console.log("House added successfully:", response.data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error("Error adding the house:", error);
          });

        // You can store this URL in your state or use it as needed
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Masud Rahman",
      address: "Tali Office Road",
      city: "Dhaka",
      bedrooms: "adf",
      roomSize: "23",
      picture: null,
      availabilityDate: "",
      rentPerMonth: "23",
      phoneNumber: "01704445275",
      description: `fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
      consequuntur! Commodi minima excepturi repudiandae velit hic maxime
      doloremque.`,
    },
  });

  const formItem = [
    {
      id: 1,
      label: "name",
      text: "Name :*",
      type: "text",
    },
    {
      id: 2,
      label: "address",
      text: "Address :*",
      type: "text",
    },
    {
      id: 3,
      label: "city",
      text: "City :*",
      type: "text",
    },
    {
      id: 4,
      label: "bedrooms",
      text: "bedrooms :*",
      type: "text",
    },
    {
      id: 5,
      label: "roomSize",
      text: "RoomSize :*",
      type: "number",
    },
    {
      id: 6,
      label: "picture",
      text: "Picture :*",
      type: "file",
    },
    {
      id: 7,
      label: "availabilityDate",
      text: "Availability Date :*",
      type: "date",
    },
    {
      id: 8,
      label: "rentPerMonth",
      text: "Rent per Month :*",
      type: "number",
    },
    {
      id: 9,
      label: "phoneNumber",
      text: "Phone Number :*",
      type: "tel",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900  border  ">
      <div className="py-8 px-4 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new House
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* grid sm:grid-cols-2 lg:grid-cols-3 gap-4  sm:gap-6  */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  sm:gap-6 ">
            {formItem.map((item) => (
              <Input
                key={item.id}
                name={item.label}
                text={item.text}
                register={register}
                isRequired={true}
                type={item.type}
                error={errors[item.label]?.message} // Display error message for each input
              ></Input>
            ))}
            {/* sm:col-span-full */}
            <div className="sm:col-span-full">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register(`description`, {
                  required: "Description is required.",
                })}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex border items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add House
          </button>
        </form>
      </div>
    </section>
  );
};

export default CRUDForm;
{
  /* File Input */
}
{
  /* <div className="w-full">
              <label
                htmlFor="picture"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Picture
              </label>
              <input
                id="picture"
                {...register("picture", {
                  required: "Please upload an image.",
                })}
                type="file"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {errors.picture && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.picture.message}
                </p>
              )}
            </div> */
}
