import { configureStore } from "@reduxjs/toolkit";

import dropdownReducer from "./dropdown-slice";
import userReducer from "./sidebar-slice";
import messagesReducer from "./message-slice";

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    users: userReducer,
    messages: messagesReducer,
  },
});

export default store;
