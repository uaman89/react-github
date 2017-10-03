import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import * as queryString from 'query-string'

import * as actions from "../../actions/list";

import {ListItem} from "../list-item/index";
import './list.css';

class List extends Component {

    componentDidMount() {
        const {pageSize, location} = this.props;
        let since = this.props;

        const queryParams = queryString.parse(location.search);

        if (queryParams.since) {
            since = parseInt( queryParams.since, 10 );
            this.props.dispatch(actions.setSinceParam(since));
        }

        this.props.dispatch(actions.fetchUsers(since, pageSize));
    }

    handlePageSizeChange(e) {
        const {since} = this.props;

        if (e.keyCode === 13) {

            let pageSize = parseInt(e.target.value, 10);
            if (!pageSize || pageSize < 0) {
                e.target.value = 1;
                console.warn(`pageSize should be an positive integer`);
                return false;
            }

            this.props.dispatch(actions.setPageSize(pageSize));

            this.props.dispatch(actions.fetchUsers(since, pageSize));
        }
    }


    render() {
        return (
            <div>
                <h1>User list: {this.props.isFetching ? 'is loading...' : null}</h1>

                <label htmlFor="since">
                    since:
                    <input type="number" min={1} id="since"
                           defaultValue={this.props.since}
                           onKeyUp={(e) => this.handlePageChange(e)}/>
                </label>

                <label htmlFor="pageSize">
                    Items per page:
                    <input type="number" min={10} id="pageSize"
                           defaultValue={this.props.pageSize}
                           onKeyUp={(e) => this.handlePageSizeChange(e)}/>
                </label>

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
        since: state.list.since,
        pageSize: state.list.pageSize,
        listItems: state.list.items
    }
}

export default withRouter(connect(mapStateToProps)(List));