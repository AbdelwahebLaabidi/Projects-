
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// import { Spotify } from 'react-spotify-embed';
import SpotifyPlayer from 'react-spotify-player';
const Music=({isPlaying,setIsPlaying})=>{

    const location = useLocation()
    const [paused,setPaused] = useState('Play')
    

    // useEffect(()=>{

        
    //     if(location.pathname == '/Music'){
    //         setIsPlaying(false)
    //     }else{
    //         setIsPlaying(true)
    //     }

    
    // },[location])
    return(
        <div>
            <h1>Play, Listen and Enjoy</h1>
        {/* {
            (paused == 'Pause' || location.pathname == '/Music') &&   

        <SpotifyPlayer
        onChange={(e)=> console.log(e)}
       uri="https://open.spotify.com/playlist/37i9dQZF1E38ACJH5ELFIY?si=64fd5e8fb4214082" // Remplacer par l'URI de votre ressource Spotify
            size={{
                width: '100%',
                height: 300,
            }}
            view={'list'} // ou 'coverart'
            theme={'black'} // ou 'white'
/>

        } */}



<iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1E38ACJH5ELFIY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>




    </div>
    )
}

export default Music