import './App.css';
import Banner from './Banner';
import Movielist from './Movielist';
import requests from './request';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Movielist title="Netflix Original" fetchUrl={requests.fetchnetflixoriginal} islargerow/>
      <Movielist title="Top Rated Movies" fetchUrl={requests.fetchtopratedmovies}/>
      <Movielist title="Popular Movies" fetchUrl={requests.fetchpopularmovies}/>
      <Movielist title="Action Movies" fetchUrl={requests.fecthactionmovies} />
      <Movielist title="Horrer Movies" fetchUrl={requests.fetchhorrormovies}/>
      <Movielist title="Romantic Moives" fetchUrl={requests.fetchromancemovies}/>
      <Movielist title="Comedy Movies" fetchUrl={requests.fetchcomedymovies}/>
      {/* <Movielist title="Documentries" fetchUrl={requests.fetchdocumentaries}/> */}
    </div>
  );
}

export default App;
