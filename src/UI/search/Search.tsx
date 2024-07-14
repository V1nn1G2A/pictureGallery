import React, { useState, useEffect, ChangeEvent } from 'react';
import { setFindString } from '../../store/reducers/sortedSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import styles from './search.module.scss';

function Search() {
  const [searchString, setSearchString] = useState<string>('');
  const findString = useAppSelector(state => state.sortedReducer.findString);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
  };

  const handleSearchClick = () => {
    dispatch(setFindString(searchString));
  };

  useEffect(() => {
    handleSearchClick();
  }, [searchString]);

  const handleClearClick = () => {
    setSearchString('');
  };

  return (
    <div className={styles.search}>
      <input
        type='search'
        className={styles.search_input}
        placeholder='Painting title'
        name='search'
        onChange={handleInputChange}
        value={findString}
      />
      <button className={styles.search_button} type='submit' aria-label='Search' onClick={handleSearchClick}>
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.39891 2C7.38042 2.00015 6.37668 2.24337 5.4711 2.70945C4.56552 3.17554 3.78426 3.85102 3.19224 4.67977C2.60022 5.50852 2.21455 6.46659 2.06727 7.47437C1.91999 8.48215 2.01536 9.51053 2.34546 10.474C2.67555 11.4375 3.23084 12.3084 3.96516 13.0141C4.69949 13.7198 5.59165 14.2401 6.5675 14.5317C7.54335 14.8233 8.5747 14.8778 9.57584 14.6907C10.577 14.5035 11.519 14.0801 12.3236 13.4557L16.6323 17.766C16.7825 17.916 16.9861 18.0002 17.1984 18C17.4107 17.9998 17.6142 17.9154 17.7642 17.7652C17.9142 17.6149 17.9984 17.4113 17.9983 17.199C17.9981 16.9867 17.9137 16.7832 17.7634 16.6332L13.4548 12.3245C14.1892 11.3785 14.6435 10.2454 14.7659 9.05402C14.8883 7.86264 14.674 6.66082 14.1473 5.58522C13.6206 4.50961 12.8026 3.60339 11.7864 2.96959C10.7702 2.3358 9.59655 1.99987 8.39891 2ZM3.59904 8.39982C3.59904 7.12682 4.10474 5.90595 5.00489 5.0058C5.90504 4.10565 7.1259 3.59996 8.39891 3.59996C9.67191 3.59996 10.8928 4.10565 11.7929 5.0058C12.6931 5.90595 13.1988 7.12682 13.1988 8.39982C13.1988 9.67283 12.6931 10.8937 11.7929 11.7938C10.8928 12.694 9.67191 13.1997 8.39891 13.1997C7.1259 13.1997 5.90504 12.694 5.00489 11.7938C4.10474 10.8937 3.59904 9.67283 3.59904 8.39982Z'
            className={styles.search_svg}
          />
        </svg>
      </button>
      <button className={styles.search_clear} type='button' aria-label='Clear field' onClick={handleClearClick}>
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.96368 2.16834C2.74322 1.94389 2.3858 1.94389 2.16534 2.16834C1.94489 2.39279 1.94489 2.7567 2.16534 2.98116L5.20166 6.07255L2.30785 9.01884C2.0874 9.2433 2.0874 9.60721 2.30785 9.83166C2.52831 10.0561 2.88574 10.0561 3.10619 9.83166L6 6.88537L8.89381 9.83166C9.11426 10.0561 9.47169 10.0561 9.69215 9.83166C9.9126 9.60721 9.9126 9.2433 9.69215 9.01884L6.79834 6.07255L9.83466 2.98116C10.0551 2.7567 10.0551 2.39279 9.83466 2.16834C9.6142 1.94389 9.25678 1.94389 9.03632 2.16834L6 5.25973L2.96368 2.16834Z'
            className={styles.search_svg}
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;
