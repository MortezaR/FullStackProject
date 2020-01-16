import { connect } from "react-redux";

import ProfileAbout from "./ProfileAbout";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout);
