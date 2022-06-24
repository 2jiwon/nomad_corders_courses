import styles from '../styles/Home.module.css'
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Home() {
  const [billions, setBillions] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await (
        await fetch("https://billions-api.nomadcoders.workers.dev/")
      ).json();
      //console.log(results);
      setBillions(results);
    })();
  }, []);

  const router = useRouter();
  const onClick = (id) => {
    router.push(`/person/${id}`);
  };

  return (
    <div>
      <Seo title="Home" />
      {!billions && <h4>Loading...</h4>}
      {billions.map((billionaire) => (
        <div onClick={() => onClick(billionaire.id)} key={billionaire.id}>
          <img src={billionaire.squareImage} />
          <h4>
            <Link href={`/person/${billionaire.id}`}>
              <a>{billionaire.name}</a>
            </Link>
          </h4>
          <p>{Math.round(billionaire.netWorth / 1000)} Billion / {billionaire.industries}</p>
        </div>
      ))}
    </div>
  );
}
