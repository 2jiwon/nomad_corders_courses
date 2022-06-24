import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import PropTypes from 'prop-types';
import SearchAppBar from '../components/AppBar';

function Home() {
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
            <SearchAppBar />
            {loading ?
                <div>{movies.map((movie) =>
                    <Movie key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        coverImg={movie.medium_cover_image}
                        genres={movie.genres}
                        year={movie.year}
                        runtime={movie.runtime} />
                )}
                </div> : <h2>Loading...</h2>
            }
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Home;