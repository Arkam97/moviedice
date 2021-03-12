import React, {useState, useEffect} from 'react';
import axios from "./axios";
import './movielist.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org./t/p/original/"

function Movielist(props) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => { 
       async function fetchdata(){
           const request = await axios.get(props.fetchUrl);
           setMovies(request.data.results);  
       }
       fetchdata();
    }, [props.fetchUrl])



    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const movieClicked = (moviename) => {
        console.log(moviename);
        if (trailerUrl !== "") setTrailerUrl("");
        else {
          movieTrailer(moviename)
            .then((url) => {
              const urlParamV = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParamV.get("v"));
            })
            .catch((err) => console.log(err));
        }
      };


    return (
        <div className="row">   
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map((movie) => (
                    <img 
                    onClick={() =>
                        movieClicked(movie.name || movie.title || movie.orginal_name)
                        } 
                    className={`row_poster ${props.islargerow && "row_posterlarge"}`} 
                    src={`${baseUrl}${props.islargerow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    key={movie.id}/>
                ))

                }
            </div>
               { trailerUrl !== "" &&  <Youtube videoId={trailerUrl} opts={opts} />} 
        </div>
        
    )
}

export default Movielist
