import {
    RECEIVE_FRIEND,
    REMOVE_FRIEND
} from "../actions/friend_actions"

const PostsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)
    switch (action.type) {
        case RECEIVE_FRIEND:
            nextState[action.payload.friend.id] = action.payload.friend;
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[action.friendId];
            return nextState;
        default:
            return prevState;
    }
};

export default PostsReducer;