import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import "./SearchForm.css";
const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("");
  const { setQuery } = useGlobalContext();
  return (
    <section className="formContainer">
      <h1>Unsplash Images</h1>
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(searchVal);
          setSearchVal("");
        }}
      >
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="searchField"
          type="text"
          placeholder="Dog"
        />
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
