import styles from '../styles/Home.module.css'
import Seo from "../components/Seo";
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
  return (
    <div>
      <Seo title="Home" />
      {!billions && <h4>Loading...</h4>}
      {billions.map((billionaire) => (
        <div key={billionaire.id}>
          <h4>{billionaire.name}</h4>
        </div>
      ))}
    </div>
  )
}
