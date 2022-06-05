import { Link } from 'react-router-dom';

function Movie({ title, coverImg, genres, summary }) {
    return (
        <div>
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <img src={coverImg} />
            <ul>
                {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>
    );
};
export default Movie;