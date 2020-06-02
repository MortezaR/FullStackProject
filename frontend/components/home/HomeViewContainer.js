import { connect } from "react-redux";

import HomeView from "./HomeView";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
