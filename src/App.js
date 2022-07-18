import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [year, setYear] = useState("");
  const [queryYear, setQueryYear] = useState("");

  return (
    <div className="meteorite-app">
      <Header year={year} />
      <SearchBar
        setYear={setYear}
        queryYear={queryYear}
        setQueryYear={setQueryYear}
      />
      <MeteoriteResults year={year} />
    </div>
  );
}

function MeteoriteResults({ year }) {
  const [meteorites, setMeteorites] = useState([]);

  useEffect(() => {
    if (year !== "") {
      fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?year=${year}`)
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          const sliced = body.slice(0, 4);
          sliced.forEach((meteorite) => {
            fetch(
              `https://nominatim.openstreetmap.org/reverse.php?lat=${meteorite.reclat}&lon=${meteorite.reclong}&format=jsonv2`
            );
          });
        })
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          console.log(body);
        });
    }
  }, [year]);

  return (
    <section>
      {meteorites.map((meteorite) => {
        return (
          <ul key={meteorite.id}>
            <li>Name: {meteorite.name}</li>
            <li>Type: {meteorite.recclass}</li>
            <li>Mass: {meteorite.mass + "g"}</li>
            {/* <li>
              Location:
              {capture().then((body) => {
                return body;
              })}
            </li> */}
          </ul>
        );
      })}
    </section>
  );
}

export default App;
