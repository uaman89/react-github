import fetch from 'isomorphic-fetch'

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';


function requestData(pageId) {
    return {
        type: REQUEST_DATA,
        payload: { pageId }
    }
}

function receiveUsers(list) {
    return {
        type: RECEIVE_USERS,
        payload: {
            list
        }
    }
}

export function fetchUsers() {
    return dispatch => {
        dispatch(requestData());

        return fetch(`https://api.github.com/users`)
            .then(response => response.json())
            .then(
                json => dispatch(receiveUsers(json)),
                error => []
            )
    }
}

function receiveUserData(data) {
    return {
        type: RECEIVE_USER_DATA,
        payload: {
            isLoading: false,
            user: data
        }
    }
}

export function fetchUserData(userName) {
    return dispatch => {
        dispatch(requestData());

        return fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(
                json => dispatch(receiveUserData(json)),
                error => {}
            )
    }
}


