import React from 'react';

const Song = ({song}) => {

    return <li>
        <p>{song.title.label}</p>
    </li>
}

export default Song