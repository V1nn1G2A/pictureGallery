import React, { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import {
  setSortedWindowActive,
  setArtist,
  setLocation,
  setYearFrom,
  setYearTo,
} from '../../store/reducers/sortedSlice';
import styles from './sorted.module.scss';
import SortedWrapper from './sortedWrappep/SortedWrapper';
import {
  setArtistLocal,
  setLocationLocal,
  setYearFromLocal,
  setYearToLocal,
} from '../../store/reducers/sortedActiveSlice';

function Sorted() {
  const dispatch = useAppDispatch();
  const { sortedWindowActive, artistLocal, locationLocal, yearFromLocal, yearToLocal, nanError, enterError } =
    useAppSelector(state => ({
      sortedWindowActive: state.sortedReducer.sortedWindowActive,
      artistLocal: state.sortedActiveSlice.artistLocal,
      locationLocal: state.sortedActiveSlice.locationLocal,
      yearFromLocal: state.sortedActiveSlice.yearFromLocal,
      yearToLocal: state.sortedActiveSlice.yearToLocal,
      nanError: state.sortedActiveSlice.nanError,
      enterError: state.sortedActiveSlice.enterError,
    }));

  const sortedRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sortedRef.current && !sortedRef.current.contains(event.target as Node)) {
      dispatch(setSortedWindowActive(false));
    }
  };

  useEffect(() => {
    if (sortedWindowActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sortedWindowActive]);

  const clearFilters = () => {
    dispatch(setArtistLocal(0));
    dispatch(setLocationLocal(0));
    dispatch(setYearFromLocal(''));
    dispatch(setYearToLocal(''));
  };

  const applyFilters = () => {
    dispatch(setArtist(artistLocal));
    dispatch(setLocation(locationLocal));
    dispatch(setYearFrom(Number(yearFromLocal)));
    dispatch(setYearTo(Number(yearToLocal)));
    dispatch(setSortedWindowActive(false));
    clearFilters();
  };

  return (
    <div ref={sortedRef} className={`${styles.sorted} ${sortedWindowActive ? styles.active : ''}`}>
      <button
        aria-label='Close sorted window'
        type='button'
        className={styles.sorted_close}
        onClick={() => dispatch(setSortedWindowActive(false))}
      >
        <svg
          className={styles.sorted_close_svg}
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z'
          />
        </svg>
      </button>
      <SortedWrapper nameField='ARTIST' />
      <SortedWrapper nameField='LOCATION' />
      <SortedWrapper nameField='YEARS' />
      {nanError && <div className={styles.sorted_error}>Please, enter the number of rows</div>}
      {enterError && <div className={styles.sorted_error}>Please, enter the required data</div>}
      <div className={styles.sorted_wrapper}>
        <button className={styles.sorted_result} aria-label='Show the results' type='button' onClick={applyFilters}>
          SHOW THE RESULTS
        </button>
        <button className={styles.sorted_clear} aria-label='Clear the results' type='button' onClick={clearFilters}>
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default Sorted;
