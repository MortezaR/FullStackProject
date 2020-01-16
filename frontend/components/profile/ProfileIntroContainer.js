import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import Intro from "./ProfileIntro";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
