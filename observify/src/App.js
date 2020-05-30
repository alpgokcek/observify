import React from 'react';
import './styles/App.css';
import SpotifyLogin from './components/SpotifyLogin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{"backgroundColor":"white", "padding": "5rem"}}>
        <p style={{"color": "purple"}}>Login with Spotify</p>
        <SpotifyLogin/>
        
      </div>
       
      </header>
    </div>
  );
}

export default App;
