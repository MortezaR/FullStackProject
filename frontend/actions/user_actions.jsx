export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
import * as UserApiUtil from '../util/UserApiUtil'


const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload
});
const receiveErrors = (payload) => ({
    type: RECEIVE_ERRORS,
    payload
});


export const fetchUser = (user) => dispatch => {
    return (UserApiUtil.fetchUser(user).then(
        payload => dispatch(receiveUser(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}

export const updateUser = (user) => dispatch => {
    return(UserApiUtil.updateUser(user).then(
        payload => dispatch(receiveUser(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}