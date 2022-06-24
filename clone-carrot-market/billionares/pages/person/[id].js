import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    const id = router.query.id;
    console.log(id);

    const [billion, setBillion] = useState({});
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`);
            console.log(response);
            const json = await response.json();
            setBillion(json);
            console.log(billion);
        })();
    }, []);

    return (
        <div>
            <Seo title="Detail" />
            <p>{billion.name}</p>
        </div>
    );
}