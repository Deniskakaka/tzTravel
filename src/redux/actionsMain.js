import { getMessage, changeMessage } from "../gateAwayFunctions.js";

export const LIST_MESSAGES = "LIST_MESSAGES";
export const EMAIL_USER = "EMAIL_USER";

export const listMessages = (list) => {
    return {
        type:LIST_MESSAGES,
        payload: {
            list
        }
    }
};

export const getEmail = (string) => {
    return {
        type:EMAIL_USER,
        payload: {
            string
        }
    }
}

export function get () {
    return function (dispatch) {
        getMessage().then(res => dispatch(listMessages(res)))
    }
} 

export function change (id, message) {
    return function(dispatch) {
        changeMessage(id, message).then(() => dispatch(get()))
    }
}