import axios from 'axios';

// export default async function getAllMovies () {
//
//         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b');
//         return response.data.results;
//
//     // static async getAllMoviesWithDescription(movieID) {
//     //     const responseByIdMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`);
//     //     const responseByActor = await axios.get(`https://api.themoviedb.org/3/person/${responseByIdMovie.data.cast[0].id}?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`);
//     //     return responseByActor.data;
//     // }
// }

export default async function fetchAllProducts () {

       // return async dispatch => {
                // async function fetchMovies() {

                //  try {
//     //     const responseByActor = await axios.get(`https://api.themoviedb.org/3/person/${responseByIdMovie.data.cast[0].id}?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`);
                //setIsMoviesLoading(true);
               // const responseAllMovies = await getAllMovies();
               return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b')
                // } catch (e) {
                // setMovieResponseError(e.message);
                //  } finally {
                // setIsMoviesLoading(false);
                //  }
      //  }
        ////////
        //  dispatch(getProductList('async'))
        ////////
        //  }
}