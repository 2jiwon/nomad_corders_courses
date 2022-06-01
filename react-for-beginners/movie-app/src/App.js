import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}
    </div>
  );
}

export default App;
