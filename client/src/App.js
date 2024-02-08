import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavProject from './Components/NavProject';
import Home from './Components/Home';
import Events from './Components/Events';
import Videos from './Components/Videos';
import Photos from './Components/Photos';
import Music from './Components/Music';
import PrivateRoute from './Components/PrivateRoute';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import UserProfil from './Components/Profil/UserProfil';
import EditProfil from './Components/Profil/EditProfil';
import UserListe from './Components/Users/UsersListe';
import Profil from './Components/Profil/Profil';
import PostsListe from './Components/Posts/PostsListe';
import OnePost from './Components/Posts/OnePost';
import { useEffect, useState } from 'react';
import MusicProvider  from './MusicContext';

function App() {

  const  [isPlaying, setIsPlaying]  = useState(false);
  // useEffect(()=>{
  //   localStorage.setItem('play',"https://open.spotify.com/embed/playlist/4YqlPeF8NyuiG6MymeSvK9?utm_source=generator")
  // },[])

  
  return (


          <div className="App">

        <NavProject  isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>

          <header className="App-header">
          <Music isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        <Routes>
          <Route path='/'           element={<Home/>}/>
          <Route path='/Events'     element={<Events/>}/>
          <Route path='/Videos'     element={<Videos/>}/>
          <Route path='/Photos'     element={<Photos/>}/>
          <Route path='/Music'      element={<MusicProvider/>}/>          
          <Route path='/Register'   element={<Register/>}/>
          <Route path='/Login'      element={<Login/>}/>

          <Route path='/Profil'     element={<PrivateRoute><Profil/></PrivateRoute>}/>
          <Route path='/EditProfil/:id' element={<PrivateRoute><EditProfil/></PrivateRoute>}/>
          <Route path='/UserProfil/:id' element={<PrivateRoute><UserProfil/></PrivateRoute>}/>

          <Route path='/UserListe'  element={<PrivateRoute><UserListe/></PrivateRoute>}/>
          
          <Route path='/PostsListe'  element={<PrivateRoute><PostsListe/></PrivateRoute>}/>
          <Route path='/OnePost/:id' element={<PrivateRoute><OnePost/></PrivateRoute>}/>


        </Routes>
      </header>
      </div>

  );
}

export default App;
