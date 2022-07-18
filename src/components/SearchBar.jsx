export default function SearchBar({ setYear, queryYear, setQueryYear }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setYear(queryYear);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="e.g. 1969"
        onChange={(e) => {
          setQueryYear(e.target.value + "-01-01T00:00:00.000");
        }}
      ></input>
      <button type="submit">search</button>
    </form>
  );
}
