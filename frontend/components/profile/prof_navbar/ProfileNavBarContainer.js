import { connect } from "react-redux";
import { fetchUser } from '../../../actions/user_actions'
import NavBar from "./ProfileNavBar";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.user_id],
    user_id: ownProps.user_id
});
const mapDispatchToProps = dispatch => ({
    fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
