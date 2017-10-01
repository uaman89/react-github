// main reducer
import {combineReducers} from 'redux'

export const initialState = {
    list: [],
    user: {
        id: '007',
        name: 'no name'
    }
};

function list(state = initialState.list, action) {
    switch (action.type) {
        case 'RECEIVE_USERS':
            return action.payload.list;
        default:
            return [...state]
    }
}

function user(state = initialState.user, action) {
    switch (action.type) {
        case 'RECEIVE_USER_DATA':
            return action.payload.user;
        default:
            return {...state, name: "default"};
    }
}

export const rootReducer = combineReducers({
    list,
    user
});

