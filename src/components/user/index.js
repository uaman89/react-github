import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {fetchUserData} from "../../actions/index";

class User extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUserData(this.props.match.params.userName));
    }

    render() {
        const {user} = this.props;
        return user.id ? (
            <div className="user-profile">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`}/>
                <p>name: {user.name}</p>,
                <p>followers: {user.followers}</p>,
                <p>following: {user.following}</p>,
                <p>created_at: {user.created_at}</p>,
                <p>company: {user.company}</p>,
                <p>email: {user.email}</p>,
                <p>location: {user.location}</p>,
                <p>blog: {user.blog}</p>,
                <p>bio: {user.bio}</p>
            </div>
        ) : (<div>
            Sorry, there is no any data...
        </div>);
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps)(User));