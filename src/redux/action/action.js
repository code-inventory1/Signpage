import { ActionTypes } from "./action-types";
import axios from "axios";

export const getUsers=()=> async (dispatch)=>{
    const result= await axios.get("https://reqres.in/api/users");
    console.log('result',result);
    dispatch({
        type: ActionTypes.FETCH_USERS,
        payload: result.data.data,
    })
}