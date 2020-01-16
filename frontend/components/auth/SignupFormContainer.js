import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./SignupForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session
});
const mapDispatchToProps = dispatch => ({
  signup: (formUser) => dispatch(signup(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
