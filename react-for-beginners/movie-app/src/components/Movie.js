import { Link } from 'react-router-dom';

function Movie({ id, title, coverImg, genres, year, runtime }) {
    return (
        <div className='item'>
            <img src={coverImg} />
            <h3 className='title'>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <ul>
                {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{year} <strong>&middot;</strong> {runtime} min</p>
        </div>
    );
};
export default Movie;