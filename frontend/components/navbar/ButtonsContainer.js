import { connect } from "react-redux";

import Buttons from "./Buttons";
import { logout } from "../../actions/session_actions";



const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
