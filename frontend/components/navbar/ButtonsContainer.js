import { connect } from "react-redux";

import Buttons from "./Buttons";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
