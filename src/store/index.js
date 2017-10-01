import {createStore} from 'redux'
import {myFirstApp} from "../redusers/index";

export const initialState = {
    list: [],
    user: {}
};

export const store = createStore(myFirstApp);
