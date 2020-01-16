import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

import LoginForm from "./LoginForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session
});
const mapDispatchToProps = dispatch => ({
  login: (formUser) => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
