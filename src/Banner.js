import React, {useState,useEffect} from 'react'
import requests from './request';
import axios from './axios'
import "./banner.css"


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchdata()
      {
        const request= await axios.get(requests.fetchnetflixoriginal);
        // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
      }  
      fetchdata();
    }, [])


    function truncateString(str, num) {
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage : `url(https://image.tmdb.org./t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.originalname}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>    
                <h1 className="banner_discription">{truncateString(movie?.overview,150)}</h1>
            </div>
            <div className="banner_fadebottom"/>
        </header>
    )
}

export default Banner
