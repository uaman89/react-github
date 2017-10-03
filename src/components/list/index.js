import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import * as queryString from 'query-string'

import * as actions from "../../actions/list";

import {ListItem} from "../list-item/index";
import './list.css';

class List extends Component {

    valForStupidInput;

    constructor(props) {
        super(props);
        const {pageSize, location} = this.props;
        let {since} = this.props;

        const queryParams = queryString.parse(location.search);

        if (queryParams.since) {
            since = parseInt(queryParams.since, 10);
            this.props.dispatch(actions.setSinceParam(since));
        }
        this.valForStupidInput = since || 0; //hack: partII
        this.props.dispatch(actions.fetchUsers(since, pageSize));

    }

    handleSinceParamChange(e) {
        if (e.keyCode === 13) {
            let since = parseInt(e.target.value, 10);
            if (!since || since < 0) {
                console.warn(`since should be an positive integer`);
                return false;
            }

            const {history, location, pageSize} = this.props;
            const params = queryString.parse(location.search);
            params.since = since;
            history.push(`${location.pathname}?${queryString.stringify(params)}#${location.hash}`);

            this.props.dispatch(actions.setSinceParam(pageSize));
            this.props.dispatch(actions.fetchUsers(since, pageSize));

        }
    }

    handlePageSizeChange(e) {
        const {since} = this.props;

        if (e.keyCode === 13) {

            let pageSize = parseInt(e.target.value, 10);
            if (!pageSize || pageSize < 0) {
                console.warn(`pageSize should be an positive integer`);
                return false;
            }

            this.props.dispatch(actions.setPageSize(pageSize));
            this.props.dispatch(actions.fetchUsers(since, pageSize));
        }
    }


    render() {
        console.log(`render!`, this.props.since);
        return (
            <div>

                <div className="pagination">
                    <label htmlFor="since">
                        since:
                        <input type="number" min={0} id="since"
                               defaultValue={this.valForStupidInput}
                               onKeyUp={(e) => this.handleSinceParamChange(e)}/>
                    </label>

                    <label htmlFor="pageSize">
                        Items per page:
                        <input type="number" min={1} id="pageSize"
                               defaultValue={this.props.pageSize}
                               onKeyUp={(e) => this.handlePageSizeChange(e)}/>
                    </label>
                </div>

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
        since: state.list.since,
        pageSize: state.list.pageSize,
        listItems: state.list.items
    }
}

export default withRouter(connect(mapStateToProps)(List));