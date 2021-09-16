import { ActionTypes } from "./action-types";
import axios from "axios";

export const setEmployeeData = ()=> async (dispatch) =>{
    dispatch(fetchEmployeeData)
    try { const result = await axios.get("https://reqres.in/api/users")
        dispatch( {
            type: ActionTypes.FETCH_EMPLOYEE_SUCCESS,
            payload:result.data})
         }
         catch(error){
               dispatch( { 
               type: ActionTypes.FETCH_EMPLOYEE_FAILURE,
               payload:error.message
                })}
                }
export const fetchEmployeeData= ()=> {
    return {
        type: ActionTypes.FETCH_EMPLOYEE_DATA
    }
}
