import fetch from 'isomorphic-fetch'
import {requestData} from "./common";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_SINCE_PARAM = 'SET_SINCE_PARAM';

function receiveUsers(list) {
    return {
        type: RECEIVE_USERS,
        payload: {
            list
        }
    }
}

export function fetchUsers(since = null) {
    return dispatch => {

        dispatch(requestData());

        return fetch(`https://api.github.com/users?since=${since}`)
            .then(response => response.json())
            .then(
                json => dispatch(receiveUsers(json)),
                error => []
            )
    }
}

export function setSinceParam(since = 0) {
    return dispatch => {

        dispatch(fetchUsers(since));

        dispatch({
            type: SET_SINCE_PARAM,
            payload: since
        });
    }
}
