import React, {Component} from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchUsers} from "../actions/index";
import {List} from "../components/list/index";
import {User} from "../components/user/index";
import {withRouter, Route} from 'react-router-dom'

class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        const {list, user} = this.props;
        return (
            <div>
                <Route path="/list" component={List}/>
                <Route path="/user/:userId" component={User}/>
            </div>
        );
    }
}


Users.propTypes = {
    user: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        listItems: state.list,
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(Users));