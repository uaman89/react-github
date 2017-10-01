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

        return (
            <div>
                <h3>User accout:</h3>
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
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps)(User));