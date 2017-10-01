import React from 'react';
import {Link} from "react-router-dom"

export const List = () => {
   return ( <div>
        <h3>User list:</h3>
        <Link to="user/1">User 1</Link>
        <Link to="user/2">User 2</Link>
        <Link to="user/3">User 3</Link>
    </div>);
}