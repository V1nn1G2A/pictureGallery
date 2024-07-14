import React from 'react';

import SearchField from '../../UI/search/Search';

import Sorted from '../sorted/Sorted';
import SortedButton from '../../UI/sortedButton/SortedButton';

import styles from './searchAndSorted.module.scss';

function SearchAndSorted() {
  return (
    <div className={styles.searchAndSorted}>
      <SearchField />
      <SortedButton />
      <Sorted />
    </div>
  );
}

export default SearchAndSorted;
