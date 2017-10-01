import fetch from 'isomorphic-fetch'

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_USERS = 'RECEIVE_USERS';


function requestData() {
    return {
        type: REQUEST_DATA,
        payload: {
            isLoading: true
        }
    }
}


function receiveUsers(list) {
    return {
        type: RECEIVE_USERS,
        payload: {
            isLoading: false,
            list
        }
    }
}



export function fetchUsers() {
    return dispatch => {
        dispatch(requestData());

        return fetch(`https://api.github.com/users`)
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
    }
}
