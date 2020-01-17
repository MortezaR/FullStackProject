import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const SessionReducer = (prevState = {id: null}, action) => {
    Object.freeze(prevState);
    let nextState = {};
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            nextState = Object.assign({}, prevState, {id: action.payload.user.id});
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState = Object.assign({}, prevState, { id: null });
            return nextState;
        default:
            return prevState
    }
}

export default SessionReducer;