const APIKEY = "5712cce4ca1e150250a97af243f1b729";

const requests = {
    fetchtrending : `trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchnetflixoriginal : `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchpopularmovies : `/movie/popular?api_key=${APIKEY}&language=en-US`,
    fetchtopratedmovies : `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fecthactionmovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchcomedymovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchhorrormovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchromancemovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchdocumentaries : `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;