import { connect } from "react-redux";
import {fetchPost, deletePost} from '../../actions/post_actions';
import {fetchUser} from '../../actions/user_actions';


import Post from "./Post";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    post: ownProps.post
});
const mapDispatchToProps = dispatch => ({
    fetchPost: (cur_user, user_id) => {dispatch(fetchPost(cur_user, user_id))},
    deletePost: (cur_user, user_id) => {dispatch(deletePost(cur_user, user_id))},
    fetchUser: cur_user => dispatch(fetchUser(cur_user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
