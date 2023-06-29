export const baseUrl = "https://image.tmdb.org/t/p/original/";


const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


// const BASE_URL = "https://api.themoviedb.org/3";

export default {
    fetchTrending: {
        title:"Trending",
        url:`/trending/movie/week?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc`,
        seriesUrl:`/trending/tv/week?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc`,
        allUrl:`/trending/all/week?api_key=${API_KEY}`
    },
    fetchAction:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedy:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorror:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomance:{
        title:"Romance",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=9648`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=9648`
    },
    fetchThriller:{
        title:"Thriller",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=10768`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=53`
    },
    fetchDrama:{
        title:"Drama",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=18`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=18`
    },
    fetchScifi:{
        title:"Sci-Fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=10765`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=878`
    },
    fetchFantasy:{
        title:"Fantasy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=10765`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=14`
    },
    fetchCrime:{
        title:"Crime",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=80`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=80`
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
        seriesUrl:`/discover/tv?api_key=${API_KEY}&with_genres=16`,
        allUrl:`/discover/multi?api_key=${API_KEY}&with_genres=16`
    },
    

}

// const requests = {
//   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
//   fetchLatest: `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
 
// };

// export default requests;

// fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
// fetchPopular: ` ${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`,
// fetchLatest: `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
// fetchTvlatest: `${BASE_URL}/tv/latest?api_key=${API_KEY}`,
// fetchtvToprated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=1`,
// fetchTvpopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=1`,
// fetchMoviePosters:`${BASE_URL}/discover/movie?api_key=${API_KEY}`
