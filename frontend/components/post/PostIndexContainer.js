import { connect } from "react-redux";

import PostIndex from "./PostIndex";
import {fetchPosts} from "../../actions/post";
import {fetchUser} from '../../actions/user'

const mapStateToProps = state => {
    return({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts)
})};
const mapDispatchToProps = dispatch => ({
    fetchPosts: cur_user => dispatch(fetchPosts(cur_user)),
    fetchUser: cur_user => dispatch(fetchUser(cur_user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
