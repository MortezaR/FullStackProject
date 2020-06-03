import { connect } from "react-redux";
import {createFriend, deleteFriend, fetchFriend} from "../../actions/friend_actions"

import FriendButton from "./FriendButton";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user_id: ownProps.user_id
});
const mapDispatchToProps = dispatch => ({
    createFriend: (cur_user, friend) => dispatch(createFriend(cur_user, friend)),
    fetchFriend: (cur_user, friend) => dispatch(fetchFriend(cur_user, friend)),
    deleteFriend: (cur_user, friend) => dispatch(deleteFriend(cur_user, friend))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendButton);
