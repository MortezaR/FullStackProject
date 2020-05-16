import { connect } from "react-redux";
import Intro from "./ProfileIntro";
import { withRouter } from "react-router-dom";
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id],
    user_id: ownProps.match.params.id
})};
const mapDispatchToProps = dispatch => ({
    fetchUser: (user) => dispatch(fetchUser(user))
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Intro));
