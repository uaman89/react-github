import React from 'react';
import {Link} from 'react-router-dom'

export const ListItem = (item) => (
    <div key={item.id} className="list-item">
        {/*todo: handle query size-param*/}

        <Link className="user" to={`user/${item.login}`}>
            <img src={item.avatar_url + '&s=100'} alt="avatar" width="100" height="100"/>
            <span className="login">{item.login}</span>
        </Link>
        <a className="link-to-github" href={item.html_url}>github profile</a>
    </div>
);