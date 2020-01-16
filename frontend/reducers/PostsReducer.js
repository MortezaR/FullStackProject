import { 
    RECEIVE_POST,
    RECEIVE_POSTS,
    DELETE_POST } from "../actions/post";

const PostsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload;
        case RECEIVE_POST:
            nextState[action.payload.post.id] = action.payload.post;
            return nextState;
        case DELETE_POST:
            delete nextState[action.payload.post.id];
            return nextState;
        default:
            return prevState;
    }
};

export default PostsReducer;