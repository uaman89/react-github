import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import {fetchUsers} from "../../actions/index";

import './list.css';
import {ListItem} from "../list-item/index";

class List extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        console.log(`arguments:`, arguments);
        return (
        <div>
            <h3>User list:</h3>
            <div className="user-list">
                {this.props.listItems.map(item => ListItem(item))}
            </div>
        </div>
        );
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