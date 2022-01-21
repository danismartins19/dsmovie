import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

const Listing = () => {

  axios.get(`${BASE_URL}/movies/1`)
  .then(response =>{
      console.log(response.data);
  });

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-mg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-mg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-mg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-mg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-mg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-mg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
