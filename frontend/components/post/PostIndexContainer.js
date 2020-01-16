import { connect } from "react-redux";

import PostIndex from "./PostIndex";
import {fetchPosts} from "../../actions/post_actions";
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = state => {
    return({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts)
})};
const mapDispatchToProps = dispatch => ({
    fetchPosts: cur_user => dispatch(fetchPosts(cur_user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
