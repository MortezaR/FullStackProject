import {
    RECEIVE_FRIEND,
    RECEIVE_FRIENDS,
    REMOVE_FRIEND
} from "../actions/friend_actions"
const FriendsReducer = (prevState = {}, action) => {
    // debugger
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)
    switch (action.type) {
        // case RECEIVE_FRIEND:
        //     nextState[action.payload.friend.id] = action.payload.friend;
        //     return nextState;
        case RECEIVE_FRIENDS:
            // debugger
            return action.payload;
        // case REMOVE_FRIEND:
        //     delete nextState[action.friendId];
        //     return nextState;
        default:
            return prevState;
    }
};

export default FriendsReducer;