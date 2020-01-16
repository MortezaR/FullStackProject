import { connect } from "react-redux";
import {fetchPost} from '../../actions/post';

import Post from "./Post";

const mapStateToProps = (state, ownProps) => ({

});
const mapDispatchToProps = dispatch => ({
    fetchPosts: (cur_user, user_id) => {dispatch(fetchPost(cur_user, user_id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
