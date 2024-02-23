import {type} from './actions';

const initialState = {
    token: '',
    userDetails: {},
    question : []
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case type.STORE_DETAILS_OF_USER:
            return {
              ...state,token: action.payload.token,userDetails:action.payload.userDetails
            };
        case type.Quiz_Question : 
            return {
                ...state, question : action.payload
            }
        
        default:
            return state;
    }
}

export default userReducer;