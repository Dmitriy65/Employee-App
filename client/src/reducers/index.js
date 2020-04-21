import { combineReducers } from "redux";

import searchReducer from "./search.js";
import profileReducer from "./profile.js";
import adminReducer from "./admin.js";
import authReducer from "./auth.js";

export default combineReducers({
  search: searchReducer,
  admin: adminReducer,
  profile: profileReducer,
  auth: authReducer
});
