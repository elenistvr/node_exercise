import "./App.css";
import ConversationArea from "./components/ConversationArea";
import UserSelect from "./components/UserSelect";
import UsersList from "./components/UsersList";

import { useSelector } from "react-redux";

function App() {
  const { selectedUser } = useSelector((state) => state.dropdown);
  const { selectedReceiver } = useSelector((state) => state.users);
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <UserSelect />
        {selectedUser && <UsersList />}
        {selectedReceiver && <ConversationArea />}
      </div>
    </>
  );
}

export default App;
