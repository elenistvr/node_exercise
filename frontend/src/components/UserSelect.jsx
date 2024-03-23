import { useDispatch, useSelector } from "react-redux";
import { fetchDropdown, setSelectedUser } from "../store/dropdown-slice";
import { fetchSidebar, setSelectedReceiver } from "../store/sidebar-slice";
import { useEffect } from "react";

const UserSelect = () => {
  const dispatch = useDispatch();
  const { data, selectedUser } = useSelector((state) => state.dropdown);

  useEffect(() => {
    dispatch(fetchDropdown());
  }, [dispatch]);

  const handleUserSelect = (event) => {
    const userId = parseInt(event.target.value);
    dispatch(setSelectedUser(userId));
    dispatch(fetchSidebar(userId));
    dispatch(setSelectedReceiver(null));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="inline-flex">
        <label htmlFor="userSelect" className="mr-2">
          Select User:
        </label>
        <select
          id="userSelect"
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
          onChange={handleUserSelect}
          value={selectedUser || ""}
        >
          {data ? (
            data.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          ) : (
            <option value="" disabled>
              Loading...
            </option>
          )}
        </select>
        <svg
          className="absolute right-0 top-0 mt-2 mr-2 pointer-events-none"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 12.917L7.083 9.5l-1.167 1.166 4.584 4.584L18.083 10.75l-1.166-1.167-6.417 3.334z"
            fill="#4A5568"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserSelect;
