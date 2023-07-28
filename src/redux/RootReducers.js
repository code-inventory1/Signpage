import { combineReducers } from "redux";
import {usersReducer} from "./reducers/userReducers"

 const rootReducers= combineReducers({
    //each reducer will come here
    usersReducer:usersReducer,
})
export default rootReducers;