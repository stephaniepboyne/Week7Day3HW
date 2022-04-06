import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {

    const songList = songs.map((song, index) => {
        return <Song song={song} key={index} index={index}/>
    })

return (
        <ol>{songList}</ol>
    )

}

export default SongList