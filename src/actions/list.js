import fetch from 'isomorphic-fetch'
import {requestData} from "./common";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_SINCE_PARAM = 'SET_SINCE_PARAM';

function receiveUsers(list) {
    return {
        type: RECEIVE_USERS,
        payload: {
            list
        }
    }
}

export function fetchUsers(since = null, pageSize = null) {
    return dispatch => {

        dispatch(requestData());

        return fetch(`https://api.github.com/users?since=${since}&per_page=${pageSize}`)
            .then(response => response.json())
            .then(
                json => dispatch(receiveUsers(json)),
                error => []
            )
    }
}

export function setPageSize(pageSize = 0) {
    return {
        type: SET_PAGE_SIZE,
        payload: pageSize
    }
}

export function setSinceParam(since = 0) {
    return {
        type: SET_SINCE_PARAM,
        payload: since
    }
}
