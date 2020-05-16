import { connect } from "react-redux";
import { updateUser, fetchUser} from '../../../actions/user_actions'
import ProfileAbout from "./ProfileAbout";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    current_user: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id],
    user_id: ownProps.match.params.id
});
const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (user) => dispatch(fetchUser(user))
});

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(ProfileAbout));
