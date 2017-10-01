import React, {Component} from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchUsers} from "../actions/index";
import {List} from "../components/list/index";
import {User} from "../components/user/index";
import {withRouter, Route} from 'react-router-dom'

class Users extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        const {list, user} = this.props;
        return (
            <div>
                <Route path="/list" render={ props => <List {...props} listItems={list}/> } />
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
        list: state.list,
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(Users));