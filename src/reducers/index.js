// main reducer
import {combineReducers} from 'redux'
import {REQUEST_DATA} from "../actions/common";
import {RECEIVE_USERS} from "../actions/list";
import {RECEIVE_USER_DATA} from "../actions/user";

export const initialState = {

    list: {
        isFetching: false,
        items: []
    },
    user: {
        isFetching: false,
        data: {}
    }
};

function list(state = initialState.list, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return {...state, isFetching: true}
        case RECEIVE_USERS:
            return {
                isFetching: false,
                items: action.payload.list
            }
        default:
            return state
    }
}

function user(state = initialState.user, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                isFetching: true,
                data: {
                    login: 'user',
                    name: '...some user',
                    followers: '100500+',
                    following: '...',
                    created_at: '...ies',
                    company: '...LLC',
                    email: '...@smth.com',
                    location: '...somewhere',
                    blog: '...bla-bla-blah',
                    bio: '... :)',
                }
            };

        case RECEIVE_USER_DATA:
            return {
                isFetching: false,
                data: action.payload.user
            };

        default:
            return {...state};
    }
}

export const rootReducer = combineReducers({
    list,
    user
});
