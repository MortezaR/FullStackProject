import { connect } from "react-redux";
import { logout } from "../../actions/session";

import ProfileView from "./ProfileView";

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
