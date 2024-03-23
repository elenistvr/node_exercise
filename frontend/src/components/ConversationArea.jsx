import { useSelector } from "react-redux";

const ConversationArea = () => {
  const { data, selectedUser } = useSelector((state) => state.dropdown);
  const { messages } = useSelector((state) => state.messages);
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-96 bg-white flex-shrink-0">
      <div className="flex flex-col mt-8">
        <div className="grid grid-cols-13 gap-y-2">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className={`col-start-${
                  message.sender === selectedUser ? "6" : "1"
                } col-end-${
                  message.sender === selectedUser ? "13" : "8"
                } p-3 rounded-lg`}
              >
                <div
                  className={`flex flex-row items-center ${
                    message.sender === selectedUser
                      ? "justify-end flex-row-reverse"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    {data[message.sender - 1].name.charAt(0)}
                  </div>
                  <div
                    className={`relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl ${
                      message.sender === selectedUser
                        ? "bg-indigo-100"
                        : "bg-white"
                    }`}
                  >
                    <div>{message.content}</div>
                    {message.sender === selectedUser && (
                      <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                        Seen
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConversationArea;
