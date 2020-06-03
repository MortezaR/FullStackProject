export const RECEIVE_FRIEND = "RECEIVE_FRIEND"
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS"
export const REMOVE_FRIEND = "REMOVE_FRIEND"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
import * as FriendApiUtil from '../util/FriendApiUtil'


const receiveFriend = payload => ({
    type: RECEIVE_FRIEND,
    payload
});
const receiveFriends = payload => ({
    type: RECEIVE_FRIEND,
    payload
});
const removeFriend = friendId => ({
    type: REMOVE_FRIEND,
    friendId
});
const receiveErrors = (payload) => ({
    type: RECEIVE_ERRORS,
    payload
});


export const fetchFriend = (cur_user,friend) => dispatch => {
    return (FriendApiUtil.fetchFriend(cur_user,friend).then(
        payload => dispatch(receiveFriend(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const fetchFriends = (user) => dispatch => {
    return (FriendApiUtil.fetchFriends(user).then(
        payload => dispatch(receiveFriends(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const createFriend = (cur_user, friend) => dispatch => {
    return (FriendApiUtil.createFriend(cur_user, friend).then(
        payload => dispatch(receiveFriend(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const deleteFriend = (cur_user,friend) => dispatch => {
    return (FriendApiUtil.deleteFriend(cur_user,friend).then(
        payload => dispatch(removeFriend(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}