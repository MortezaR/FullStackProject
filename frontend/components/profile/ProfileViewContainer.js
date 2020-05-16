import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import ProfileView from "./ProfileView";
import { fetchUser } from '../../actions/user_actions'


const mapStateToProps = (state , ownProps) => ({
    user_id: ownProps.match.params.user_id,
});
const mapDispatchToProps = dispatch => ({
    fetchUser: (user) => dispatch(fetchUser(user)),
    logout: () => dispatch(logout())
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ProfileView));
