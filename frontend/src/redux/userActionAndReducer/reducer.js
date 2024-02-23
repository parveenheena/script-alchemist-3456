import {type} from './actions';

const initialState = {
    token: '',
    userDetails: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case type.STORE_DETAILS_OF_USER:
            return {
              state: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;