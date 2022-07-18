export default function Header({ year }) {
  return (
    <header>
      {year ? (
        <h1>Meteorites by year : {year}</h1>
      ) : (
        <h1>Meteorites by year</h1>
      )}
    </header>
  );
}
