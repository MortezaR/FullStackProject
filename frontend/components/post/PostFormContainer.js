import { connect } from "react-redux";

import PostForm from "./PostForm";
import {createPost} from '../../actions/post_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id] 
});
const mapDispatchToProps = dispatch => ({
    createPost: (cur_user, post) => dispatch(createPost(cur_user, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
