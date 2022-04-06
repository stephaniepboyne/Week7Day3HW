import React from 'react';

const Song = ({song}) => {
    
    return <li class='list'>
        <p>{song.title.label}</p>
        <img src={song['im:image'][0].label} class='cover'/>
        <br></br>
        <button class='button'><a href={song.link[1].attributes.href} target='blank'>DOWNLOAD SAMPLE</a></button>
        
    </li>
}

export default Song