import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from 'store/character';
import styles from './SearchBar.module.css';

interface Props {
  searchQuery: string;
}

const SearchBar: React.FC<Props> = ({ searchQuery }) => {
  const [query, setQuery] = useState(searchQuery);

  const dispatch = useDispatch();
  const onSearch = (name: string) => {
    dispatch(setName({ name }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="search for pokémons..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
