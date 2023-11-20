import axios from "axios";

export function searchMovie(searchText) {
  return axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}`
    )
    .then((resp) => {
      if (resp && resp.status === 200) {
        return resp;
      } else {
        throw new Error("api response is not 200");
      }
    })
    .catch((err) => err);
}

export function getMovieDetails(imdbID) {
  return axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`
    )
    .then((resp) => {
      if (resp && resp.status === 200) {
        return resp;
      } else {
        throw new Error("api response is not 200");
      }
    })
    .catch((err) => err);
}
