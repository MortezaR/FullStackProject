import { connect } from "react-redux";

import PostIndex from "./PostIndex";
import { withRouter } from "react-router-dom";
import { fetchUser } from '../../actions/user_actions'
import {fetchPosts} from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
    let user;
    let user_id;
    if(ownProps.match.params.id){
        user = state.entities.users[ownProps.match.params.id];
        user_id = ownProps.match.params.id;
    }else{
        user = state.entities.users[state.session.id];
        user_id = state.session.id;
    }
    return({
    currentUser: state.entities.users[state.session.id],
    user_id: user_id,
    user: user,
    posts: Object.values(state.entities.posts)
})};
const mapDispatchToProps = dispatch => ({
    fetchPosts: user => dispatch(fetchPosts(user)),
    fetchUser: (user) => dispatch(fetchUser(user))
});

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(PostIndex));
