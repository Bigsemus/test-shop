import axios from 'axios';

export default async function fetchAllProducts () {
               return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b');
}