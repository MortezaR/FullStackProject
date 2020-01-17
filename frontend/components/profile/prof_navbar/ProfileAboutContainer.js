import { connect } from "react-redux";
import {updateUser} from '../../../actions/user_actions'
import ProfileAbout from "./ProfileAbout";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({
    updateUser: (cur_user, user) => dispatch(updateUser(cur_user, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout);
