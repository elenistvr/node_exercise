import { setSelectedReceiver } from "../store/sidebar-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMessages } from "../store/message-slice";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);
  const { selectedUser } = useSelector((state) => state.dropdown);

  const handleUserSelect = (userId) => {
    const receiver = parseInt(userId);
    dispatch(setSelectedReceiver(receiver));
    dispatch(fetchMessages({ senderId: selectedUser, receiverId: receiver }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-col mt-8">
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48">
          {users.map((user) => (
            <button
              key={user.id}
              className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              onClick={() => {
                handleUserSelect(user.id);
              }}
            >
              <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                {user.name.charAt(0)}
              </div>
              <div className="ml-2 text-sm font-semibold">{user.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
