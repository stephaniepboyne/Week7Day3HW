import React from 'react';

const Song = ({song}) => {
    
    return <li>
        <p>{song.title.label}</p>
        <img src={song['im:image'][0].label}/>
        <button><a href={song.link[1].attributes.href} target='blank'>Download sample</a></button>
        
    </li>
}

export default Song