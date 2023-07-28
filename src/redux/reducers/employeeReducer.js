import { ActionTypes } from "../action/action-types";

const initialState={
    loading:false,
    Posts:[],
    error:''
}

export const employeeReducer=(state= initialState,action)=>{
    switch(action.type){
        case ActionTypes.FETCH_EMPLOYEE_DATA:
            return{
                ...state,
                loading:true,
            }
            case ActionTypes.FETCH_EMPLOYEE_SUCCESS:
            return{
                loading:false,   
                Posts:action.payload.data,
                error:''
            }
            case ActionTypes.FETCH_EMPLOYEE_FAILURE:
            return{
                loading:false,   
                Posts:[],
                error:action.payload
            }
            ;
            default:
            return state;
    }
}