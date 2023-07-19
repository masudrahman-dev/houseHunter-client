import { Link } from "react-router-dom";

const Card = ({ house }) => {
  const {
    address,
    availabilityDate,
    bedrooms,
    city,
    description,
    name,
    phoneNumber,
    rentPerMonth,
    roomSize,
    _id,
    picture,
  } = house;

  return (
    <div className=" bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={picture || "	https://source.unsplash.com/user/c_v_r/1600x900"}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <div className="mb-3">
          <ul className="flex gap-3 flex-col">
            <li>Rent Per Month : & {rentPerMonth}</li>
            <li>Phone Number : {phoneNumber}</li>
            <li>city : {city}</li>
            <li>Availability Date : {availabilityDate}</li>
            <li>Bed Rooms : {bedrooms}</li>
            <li>Room Size : {roomSize} feet</li>
            <li>Address: {address} </li>
            <li>Description: {description} </li>
          </ul>
        </div>

        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Booked
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
