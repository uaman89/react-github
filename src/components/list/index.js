import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'

import {fetchUsers} from "../../actions/index";

import './list.css';

class List extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        console.log(`arguments:`, arguments);
        return ( <div className="user-list">
            <h3>User list:</h3>
            {this.props.listItems.map(item => (
                <div key={item.id}>
                    <img src={item.avatar_url} alt="avatar" width="100" height="100"/>
                    <Link to={`user/${item.login}`}>{item.login}</Link>
                    <br/>
                </div>)
            )}
        </div>);
    }
}

List.propTypes = {
    listItems: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        listItems: state.list
    }
}

export default withRouter(connect(mapStateToProps)(List));