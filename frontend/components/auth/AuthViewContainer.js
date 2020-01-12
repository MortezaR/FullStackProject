import { connect } from "react-redux";
import { login } from "../../actions/session";

import AuthView from "./AuthView";

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
