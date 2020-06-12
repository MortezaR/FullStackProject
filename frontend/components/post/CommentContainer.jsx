import { connect } from "react-redux";
import { fetchPost, deletePost, fetchComments } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';


import Comment from "./Comment";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    post: ownProps.post,
    user: ownProps.user,
    comments: Object.values(state.entities.posts)
});
const mapDispatchToProps = dispatch => ({
    fetchPost: (cur_user, user_id) => { dispatch(fetchPost(cur_user, user_id)) },
    deletePost: (cur_user, user_id) => { dispatch(deletePost(cur_user, user_id)) },
    fetchUser: cur_user => dispatch(fetchUser(cur_user)),
    fetchComments: (user, post_id) => { dispatch(fetchComments(user, post_id)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
