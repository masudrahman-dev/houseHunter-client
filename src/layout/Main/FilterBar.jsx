import { NavLink } from "react-router-dom";
const FilterBar = () => {
  return (
    <aside className={` h-screen  pt-14 sm:pl-4 border-x `}>
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
  );
};

export default FilterBar;
