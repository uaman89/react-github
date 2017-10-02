import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {fetchUserData} from "../../actions/index";

import "./user.css"

class User extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUserData(this.props.match.params.userName));
    }

    render() {
        const {user, isFetching} = this.props;
        return (
            <div className="user">

                <h1>User profile: {isFetching ? <code>is loading...</code> : null}</h1>

                <div className="profile">
                    <div className="avatar">
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`}/>
                    </div>
                    <div className="details">
                        <div><span className="label">name: </span><span>{user.name}</span></div>
                        <div><span className="label">followers: </span><span>{user.followers}</span></div>
                        <div><span className="label">following: </span><span>{user.following}</span></div>
                        <div><span className="label">created_at: </span><span>{user.created_at}</span></div>
                        <div><span className="label">company: </span><span>{user.company}</span></div>
                        <div><span className="label">email: </span><span>{user.email}</span></div>
                        <div><span className="label">location: </span><span>{user.location}</span></div>
                        <div><span className="label">blog: </span><span>{user.blog}</span></div>
                        <div><span className="label">bio: </span><span>{user.bio}</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isFetching: state.user.isFetching,
        user: state.user.data
    }
}


export default withRouter(connect(mapStateToProps)(User));