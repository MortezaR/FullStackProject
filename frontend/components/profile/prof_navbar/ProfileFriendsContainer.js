import { connect } from "react-redux";
import {fetchFriends, deleteFriend} from "../../../actions/friend_actions"
import ProfileFriends from "./ProfileFriends";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id],
    user_id: ownProps.match.params.id,
    friends: state.entities.friends
});
const mapDispatchToProps = dispatch => ({
    fetchFriends: (user) => dispatch(fetchFriends(user)),
    deleteFriend: (cur_user, friend) => dispatch(deleteFriend(cur_user, friend))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFriends);
