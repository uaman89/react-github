import fetch from 'isomorphic-fetch'
import {requestData} from "./common";

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

function receiveUserData(data) {
    return {
        type: RECEIVE_USER_DATA,
        payload: {
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

