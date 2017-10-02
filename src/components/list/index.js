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
        return (
            <div>
                <h1>User list: {this.props.isFetching ? 'is loading...' : null}</h1>

                <div className="user-list">
                    {this.props.listItems.length === 0 ? (
                        'no any users here... No internet?'
                    ) : (
                        this.props.listItems.map(item => ListItem(item))
                    )}
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
        isFetching: state.list.isFetching,
        listItems: state.list.items
    }
}

export default withRouter(connect(mapStateToProps)(List));