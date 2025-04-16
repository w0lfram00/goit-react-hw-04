import React from "react";

const SearchBar = ({ updateQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuery(e.target.elements.search.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
