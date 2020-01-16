import { connect } from "react-redux";

import NavBar from "./ProfileNavBar";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
