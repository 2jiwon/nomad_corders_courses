import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    const { id } = router.query;
    console.log(id);

    const [billion, setBillion] = useState({});
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/${id}`);
            const json = await response.json();
            setBillion(json);
            setAssets(json.financialAssets);
        })();
    }, []);

    return (
        <div>
            <Seo title="Detail" />
            <img src={billion.squareImage} />
            <h2>{billion.name}</h2>
            <div>
                <p>Networth: {Math.round(billion.netWorth / 1000)} Billion</p>
                <p>Country: {billion.country}</p>
                <p>Industry: {billion.industries}</p>
                <p>{billion.bio}</p>
            </div>
            <div>
                <h2>Financial Assets</h2>
                {assets.map((as, i) => (
                    <div key={i}>
                        <p>Ticker: {as.ticker}</p>
                        <p>Shares: {as.numberOfShares}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}