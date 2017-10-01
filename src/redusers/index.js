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
            console.log(`action.response:`, action.payload);
            return action.payload.list;
        default:
            return [...state]
    }
}

function user(state = initialState.user, action) {
    return {...state, name: "default"};
}

export const rootReducer = combineReducers({
    list,
    user
});

