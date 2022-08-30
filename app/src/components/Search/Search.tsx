import React, {useState, useEffect} from 'react';
import {useArticlesContext} from 'context/articles/ArticleContext';

import styles from './Search.module.scss';
import {ArticlesContextInterface} from 'context/articles/typings';

function Search() {
  const [searchParam, setSearchParam] = useState('');
  const {setSearchQuery} = useArticlesContext() as ArticlesContextInterface;

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setSearchParam(event.target.value);
  };

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [setSearchQuery, searchParam]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className={styles.searchInput}
          placeholder="Search articles..."
          type="search"
          onChange={handleChange}
        ></input>
      </label>
    </form>
  );
}

export default Search;
