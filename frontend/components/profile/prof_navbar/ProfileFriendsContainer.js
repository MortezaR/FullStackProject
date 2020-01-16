import { connect } from "react-redux";

import ProfileFriends from "./ProfileFriends";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFriends);
