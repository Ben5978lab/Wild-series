import { useEffect, useState } from "react";

type SeriesArray = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  year: number;
}[];

function Programs() {
  const [seriesData, setSeriesData] = useState([] as SeriesArray);

  // async function recoverAPI() {
  //   const request = await fetch("http://localhost:3310/api/programs");
  //   const data = await request.json();
  //   console.info(data);
  //   setSeriesData(data);
  // }

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then(setSeriesData);
  }, []);
  return (
    <section>
      {seriesData.map((serie) => (
        <article key={serie.id}>
          <h1>{serie.title}</h1>
          <img src={serie.poster} alt="poster" />
        </article>
      ))}
    </section>
  );
}
export default Programs;
