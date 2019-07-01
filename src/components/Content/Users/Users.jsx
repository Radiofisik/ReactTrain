import * as React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
       this.props.load();
    }

    render() {
        return <div>
            users
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}> Unfollow </button>
                                :
                                <button onClick={() => this.props.follow(u.id)}> Follow </button>
                            }
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                )
            }
        </div>
    }

}

export default Users;
