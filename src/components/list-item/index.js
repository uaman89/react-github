import React from 'react';
import {Link} from 'react-router-dom'

export const ListItem = (item) => (
    <div key={item.id} className="list-item">
        {/*todo: handle query size-param*/}

        <Link to={`user/${item.login}`}>
            {item.login}
            <br/>
            <img src={item.avatar_url + '&s=100'} alt="avatar" width="100" height="100"/>
        </Link>
        <a href={item.html_url}>github profile</a>
        <br/>
    </div>
);