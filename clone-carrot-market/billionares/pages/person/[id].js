import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
    const router = useRouter();
    const { id } = router.query;
    // const id = router.query.id;

    // information of one billionaire
    const [billion, setBillion] = useState({});
    // for Financial Assets
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
        <div className="container">
            <Seo title="Detail" />
            <img src={billion.squareImage} alt={billion.name} />
            <h2>{billion.name}</h2>
            <div>
                <p>Networth: {Math.round(billion.netWorth / 1000)} Billion</p>
                <p>Country: {billion.country}</p>
                <p>Industry: {billion.industries}</p>
                <p>{billion.bio}</p>
            </div>
            <div>
                <h2>Financial Assets</h2>
                <div className="asset">
                    {assets?.map((asset, i) => (
                        <div key={i}>
                            <ul>
                                <li>Ticker: {asset.ticker}</li>
                                <li>Shares: {Number(asset.numberOfShares).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
                                {asset.exerciseOptionPrice ? <li>Exercise Price: ${asset.exerciseOptionPrice}</li> : ""}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 20px;
                }
                img {
                    max-width: 100%;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .asset {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
                    padding: 20px;
                    gap: 20px;
                }
                .asset div {
                    border: 1px solid #ccc;
                    border-radius: 12px;
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