// main reducer
import {combineReducers} from 'redux'
import {RECEIVE_USER_DATA, RECEIVE_USERS} from "../actions/index";

export const initialState = {
    list: [],
    user: {}
};

function list(state = initialState.list, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.payload.list;
        default:
            return [...state]
    }
}

function user(state = initialState.user, action) {
    switch (action.type) {
        case RECEIVE_USER_DATA:
            return action.payload.user;
        default:
            return {...state};
    }
}

export const rootReducer = combineReducers({
    list,
    user
});
0
