import {connect} from "react-redux";
import Users from "./Users";
import {follow, load, setUsers, unfollow} from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, load})(Users);
