import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import "./SearchForm.css";
const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("");
  const { setQuery, query } = useGlobalContext();
  return (
    <section className="formContainer">
      <h1 className="header">Image Finder</h1>
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
          placeholder={query}
        />
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
