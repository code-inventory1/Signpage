import { ActionTypes } from "../action/action-types";

const initialState={
    Posts:[]
}
export const usersReducer= (state= initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.FETCH_USERS:
            return{
                ...state,Posts:payload
            };
            default:
                return  state;
    }
}