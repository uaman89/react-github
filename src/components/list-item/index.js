import React from 'react';
import {Link} from 'react-router-dom'

export const ListItem = (item) => (
    <div key={item.id} className="list-item">
        {/*todo: handle query size-param*/}

        <Link className="user" to={`user/${item.login}`}>
            <span className="login">{item.login}</span>
            <img src={item.avatar_url + '&s=100'} alt="avatar" width="100" height="100"/>
        </Link>
        <a className="link-to-github" href={item.html_url}>github profile</a>
    </div>
);