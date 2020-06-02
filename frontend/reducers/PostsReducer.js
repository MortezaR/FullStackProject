import { 
    RECEIVE_POST,
    RECEIVE_POSTS,
    REMOVE_POST,
    RECEIVE_COMMENTS } from "../actions/post_actions";

const PostsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload;
        case RECEIVE_COMMENTS:
            nextState['comments'] = action.payload
            return nextState
        case RECEIVE_POST:
            nextState[action.payload.post.id] = action.payload.post;
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return prevState;
    }
};

export default PostsReducer;