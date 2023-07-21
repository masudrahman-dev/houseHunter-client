import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TableRow from "./TableRow";
const tableHeadItem = [
  {
    label: "#",
  },

  {
    label: "Name",
  },
  {
    label: "Rent Per Month",
  },
  {
    label: "Phone Number",
  },

  {
    label: "Availability Date",
  },

  {
    label: "Delete",
  },
  {
    label: "Edit",
  },
];
const Table = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [houses, setHouses] = useState([]);

  const handleDelete = (_id) => {
    console.log(_id);

    // setIsDisable(true);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // axios
        //   .delete(`${import.meta.env.VITE_BASE_URL}/carts/${_id}`)
        //   .then((response) => {
        //     const data = response.data;
        //     if (data.deletedCount > 0) {
        //       setTimeout(() => {
        //         setIsDisable(false);
        //       }, 800);
        //     }
        //   })
        //   .catch((error) => {
        //     setIsDisable(false);
        //     console.error("Error deleting item:", error);
        //     Swal.fire(
        //       "Error!",
        //       "An error occurred while deleting the file.",
        //       "error"
        //     );
        //   });
      }
    });
  };
  const handleUpdate = (_id) => {
    console.log(_id);
    // console.log(id, plusOrMinus);
    // setIsDisable(true);
    // axios
    //   .patch(`${import.meta.env.VITE_BASE_URL}/carts/${id}`, { plusOrMinus })
    //   .then((response) => {
    //     const data = response.data;
    //     // toast.success("increment or decrement by one");
    //     // refetch();
    //     setTimeout(() => {
    //       setIsDisable(false);
    //     }, 1000);
    //   })
    //   .catch((error) => {
    //     console.error("Error plus or minus item:", error);
    //     // toast.error("Error occur!");
    //     setIsDisable(false);
    //   });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/houses/addNewHouse`
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className=" py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden mt-20  shadow-md dark:bg-gray-800 sm:rounded-lg">
            {/* table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {tableHeadItem?.map((item) => (
                      <th key={item.label} scope="col" className="p-4">
                        {item.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {houses?.map((item, index) => (
                    <TableRow
                      key={index}
                      item={item}
                      index={index}
                      handleDelete={handleDelete}
                      handleUpdate={handleUpdate}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500   rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500   rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
