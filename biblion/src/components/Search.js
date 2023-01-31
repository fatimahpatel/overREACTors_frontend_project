import { useState } from "react";

const Search = ({filterBooks}) => {

    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      filterBooks(searchTerm);
    }

    return (  
        <form className="search" role="search" onSubmit={handleSubmit}>
        <label className="search__label" htmlFor="search__input">Search for a book:</label>
        <input 
          type="search" 
          placeholder="Please type here..." id="search__input" 
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)} />
        <input type="submit" value="Submit" className="search__submit"/>
      </form>
    );
}
 
export default Search;