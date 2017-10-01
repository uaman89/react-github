import React, {Component} from 'react';
import {Link} from "react-router-dom"

import './list.css';

export class List extends Component {
    render() {
        console.log(`arguments:`, arguments);
        return ( <div class="user-list">
            <h3>User list:</h3>
            {this.props.listItems.map(item => (
                <div>
                    <img src={item.avatar_url} alt="avatar" width="100" height="100"/>
                    <Link to={`user/${item.id}`}>{item.login}</Link>
                    <br/>
                </div>)
            )}
        </div>);
    }
}