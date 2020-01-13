import { connect } from "react-redux";
import { logout } from "../../actions/session";

import HomeView from "./HomeView";

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
