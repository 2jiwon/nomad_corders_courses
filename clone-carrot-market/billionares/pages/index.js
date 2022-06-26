import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Home() {
  // information of all billionaires
  const [billions, setBillions] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await (
        await fetch("https://billions-api.nomadcoders.workers.dev")
      ).json();
      // console.log(results);
      setBillions(results);
    })();
  }, []);

  // routing for the detail page 
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/person/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {!billions && <h4>Loading...</h4>}
      {billions.map((billionaire) => (
        <div onClick={() => onClick(billionaire.id)} key={billionaire.id}>
          <img alt={billionaire.name} src={billionaire.squareImage.includes('undefined') ? `https://via.placeholder.com/416x416.png?text=${billionaire.name}` : billionaire.squareImage} />
          <h4>
            <Link href={`/person/${billionaire.id}`}>
              <a>{billionaire.name}</a>
            </Link>
          </h4>
          <p>{Math.round(billionaire.netWorth / 1000)} Billion / {billionaire.industries}</p>
        </div>
      ))}
      <style jsx>
        {`
          .container {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(20%, auto));
              gap: 20px;
              margin-x: 10rem;
          }
          img {
            width: 10rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            transition: transform 0.2s ease-in-out;
          }
          img:hover {
            transform: scale(1.05) translateY(-10px);
          }
        `}
      </style>
    </div>
  );
}
