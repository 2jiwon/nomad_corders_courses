import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    ).json();
    setMovies(json.data.movies);
    setLoading(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ?
        <div>{movies.map((movie) =>
          <Movie id={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
            genres={movie.genres}
            summary={movie.summary} />
        )}
        </div> : <h2>Loading...</h2>
      }
    </div>
  );
}

Movie.PropTypes = {
  coverImg = PropTypes.string.isRequired,
  title = PropTypes.string.isRequired,
  summary = PropTypes.string.isRequired,
  genres = PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default App;
