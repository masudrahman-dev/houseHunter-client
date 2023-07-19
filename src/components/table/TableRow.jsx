const TableRow = ({ item, index, handleUpdate, handleDelete }) => {
  const { availabilityDate, name, phoneNumber, rentPerMonth, _id } = item;
  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {index + 1}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {name}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {phoneNumber}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {rentPerMonth}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {availabilityDate}
        </span>
      </td>
      <td className="px-4 py-2">
        <button onClick={()=>handleUpdate(_id)}>Update</button>
      </td>
      <td className="px-4 py-2">
        <button onClick={()=>handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
