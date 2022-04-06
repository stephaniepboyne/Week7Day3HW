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
        <h1>The U.K. Top 20 Songs</h1>
        <br></br>
        <img src='https://c.tenor.com/rJpCgvQJgsEAAAAi/music.gif' class='img'/>
            <div class='box'>{ <SongList songs={music}></SongList> }</div>

        </>
    )
  
}

export default MusicContainer;