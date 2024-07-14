import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { toggleFilter } from '../../../store/reducers/sortedActiveSlice';

import styles from './sortedRowButton.module.scss';
import { IShowButtonProps } from '../../../models/IShowButtonProps';

function SortedRowButton({ nameField }: IShowButtonProps) {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const artistActive = useAppSelector(state => state.sortedActiveSlice.artistActive);
  const locationActive = useAppSelector(state => state.sortedActiveSlice.locationActive);
  const yearActive = useAppSelector(state => state.sortedActiveSlice.yearActive);

  const sortedWindowActive = useAppSelector(state => state.sortedReducer.sortedWindowActive);

  useEffect(() => {
    if (!sortedWindowActive) {
      if (artistActive && nameField === 'ARTIST') {
        dispatch(toggleFilter('ARTIST'));
      } else if (locationActive && nameField === 'LOCATION') {
        dispatch(toggleFilter('LOCATION'));
      } else if (yearActive && nameField === 'YEARS') {
        dispatch(toggleFilter('YEARS'));
      }

      if (active) {
        setActive(false);
      }
    }
  }, [sortedWindowActive]);

  const getAriaPressedValue = () => {
    if (nameField === 'ARTIST') {
      return artistActive;
    }
    if (nameField === 'LOCATION') {
      return locationActive;
    }
    if (nameField === 'YEARS') {
      return yearActive;
    }
    return false;
  };

  return (
    <button
      className={styles.showButton}
      onClick={() => {
        setActive(!active);
        dispatch(toggleFilter(nameField));
      }}
      aria-pressed={getAriaPressedValue()}
      aria-label='Show Button'
      type='button'
    >
      <svg
        className={`${styles.showButton_svg}  ${active ? styles.showButton_top_active : styles.showButton_top}`}
        width='16'
        height='2'
        viewBox='0 0 16 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z'
        />
      </svg>
      <svg
        className={styles.showButton_svg}
        width='16'
        height='2'
        viewBox='0 0 16 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z'
        />
      </svg>
    </button>
  );
}

export default SortedRowButton;
