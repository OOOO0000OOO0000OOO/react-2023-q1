import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface Props {
  searchQuery: string;
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchQuery, onSearch }) => {
  const [query, setQuery] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search for pokémons..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
