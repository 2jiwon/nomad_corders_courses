import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setLoading(true);
        setDetail(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <div>
                <h2>{detail.title_long}</h2>
                <img src={detail.medium_cover_image} />
                <p>Rating: {detail.rating}</p>
                <p>Runtime : {detail.runtime} minutes</p>
                <p>Description: {detail.description_full}</p>
            </div> : <h1>Loading...</h1>}
        </div>
    )
}
export default Detail;