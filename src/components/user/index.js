import React from 'react';

export const User = ({match}) => {
    return (
        <div>
            <h3>User accout:</h3>
            id: {match.params.userId}
        </div>
    );
}