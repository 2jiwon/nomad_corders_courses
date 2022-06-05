function Movie({ title, coverImg, genres, summary }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} />
            <ul>
                {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>
    );
};
export default Movie;