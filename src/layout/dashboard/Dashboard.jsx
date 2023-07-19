
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {


  return (
    <div className="max-w-screen-xl mx-auto  grid grid-cols-12 ">


        <aside className={` h-screen col-span-3 pt-14 sm:pl-4 border-x `}>
          <div className="overflow-y-auto sm:px-3 px-1 h-full   dark:bg-gray-800">
            <ul className="space-y-2  sm:text-center">
              <li>
                <NavLink
                  to="/dashboard/addNewHouse"
                  className=" sm:text-base text-xs font-medium"
                >
                  {/* <span className="ml-3">{role}</span> */}
                  <span className=" text-fuchsia-600">Add New House</span>
                </NavLink>
              </li>

              {/* {"user" == "user" && <StudentDashboard />} */}

              <hr />

              <li>
                <NavLink
                  to="/dashboard/manageHouse"
                  className="  sm:text-base text-xs  font-medium"
                >
                  {/* <span className="ml-3">{role}</span> */}
                  <span className=" text-fuchsia-600">Manage House</span>
                </NavLink>
              </li>
              {/* {"instructor" == "instructor" && <InstructorDashboard />} */}
              <hr />
            </ul>
          </div>
        </aside>

      <div className="col-span-9 md:ml-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

// <div className="max-w-screen-xl mx-auto px-4">
// <h1 className="text-2xl font-semibold my-4">My House App</h1>
// <button
//   onClick={() => setShowForm(true)}
//   className="bg-blue-500 text-white px-4 py-2 rounded"
// >
//   Add New House
// </button>

// {/* Show the form/modal only when showForm is true */}
// {/* {showForm && <CRUDForm onSubmit={handleFormSubmit} />} */}
// </div>
