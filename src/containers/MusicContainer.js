import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const MusicContainer = () => {

    const [music, setMusic] = useState([]);
    
    useEffect (() => {
        getMusic();
    }, [])

    const getMusic = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then (result => result.json())
        .then(song => setMusic(song.feed.entry))
       
    }

    



    return ( 
        <>
            { <SongList songs={music}></SongList> }
        </>
    )
  
}

export default MusicContainer;