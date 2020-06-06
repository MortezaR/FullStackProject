import { connect } from "react-redux";
import { searchUser} from "../../actions/user_actions"
import SearchBar from "./SearchBar";

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    searchUser: (user) => dispatch(searchUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
