export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const REMOVE_POST = "REMOVE_POST"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
import * as PostApiUtil from '../util/PostApiUtil'

const receivePosts = payload => ({
    type: RECEIVE_POSTS,
    payload
});
const receiveComments = payload => ({
    type: RECEIVE_COMMENTS,
    payload
});
const receivePost = payload => ({
    type: RECEIVE_POST,
    payload
});
const removePost = postId => ({
    type: REMOVE_POST,
    postId
});
const receiveErrors = (payload) => ({
    type: RECEIVE_ERRORS,
    payload
});


export const fetchPosts = cur_user => dispatch => {
    return (PostApiUtil.fetchPosts(cur_user).then(
        payload => dispatch(receivePosts(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const fetchComments = (user,post_id) => dispatch => {
    return (PostApiUtil.fetchComments(user,post_id).then(
        payload => dispatch(receiveComments(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const fetchPost = (cur_user, post) => dispatch => {
    return (PostApiUtil.fetchPost(cur_user,post).then(
        payload => dispatch(receivePost(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const createPost = (cur_user, post) => dispatch => {
    return (PostApiUtil.createPost(cur_user,post).then(
        payload => dispatch(receivePost(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const updatePost = (cur_user, post) => dispatch => {
    return (PostApiUtil.updatePost(cur_user, post).then(
        payload => dispatch(receivePost(payload)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}
export const deletePost = (cur_user, postId) => dispatch => {
    return (PostApiUtil.deletePost(cur_user, postId).then(
        () => dispatch(removePost(postId)),
        payload => dispatch(receiveErrors(payload.responseJSON))
    ));
}

