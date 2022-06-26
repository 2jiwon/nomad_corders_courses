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
        <div className="container billion">
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
                {assets.map((asset, i) => (
                    <div key={i} className="asset">
                        <ul>
                            <li>Ticker: {asset.ticker}</li>
                            <li>Shares: {Number(asset.numberOfShares).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
                            {asset.exerciseOptionPrice ? <li>Exercise Price: ${asset.exerciseOptionPrice}</li> : ""}
                        </ul>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .container {
                    padding: 20px;
                    background-color: #000;
                    color: white;
                }
                .billion img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .asset {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
                    padding: 20px;
                    gap: 20px;
                    border: 1px solid #ccc;
                }
                .asset ul {
                    list-style-type: none;
                    line-height: 200%;
                }
            `}
            </style>
        </div>
    );
}