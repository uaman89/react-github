import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import * as actions from "../../actions/list";

import './list.css';
import {ListItem} from "../list-item/index";

class List extends Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchUsers(this.props.since));
    }

    handlePageChange(e){
        if (e.keyCode === 13 ){
            let since = parseInt(e.target.value, 10);
            if (!since || since < 0){
                e.target.value = 1;
                console.warn(`since should be an positive integer`);
                return false;
            }
            console.log(`set since: ${since}`);
            this.props.dispatch(actions.setSinceParam(since));
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
                           onKeyUp={(e)=>this.handlePageChange(e)}/>
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
        listItems: state.list.items
    }
}

export default withRouter(connect(mapStateToProps)(List));