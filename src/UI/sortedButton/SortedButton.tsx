import React from 'react';

import { setSortedWindowActive } from '../../store/reducers/sortedSlice';
import { useAppDispatch } from '../../hooks/redux';

import styles from './sortedButton.module.scss';

function SortedButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(setSortedWindowActive(true))}
      className={styles.sortedButton}
      type='button'
      aria-label='Active sorted window'
    >
      <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          className={styles.sortedButton_svg}
          d='M14.2 0.5C13.3 0.5 12.7 1 12.5 1.7H0.6C0.2 1.7 0 1.9 0 2.3C0 2.7 0.2 2.9 0.6 2.9H12.4C12.6 3.6 13.4 4.1 14.1 4.1C15.1 4.1 15.9 3.3 15.9 2.3C16 1.3 15.1 0.5 14.2 0.5ZM14.2 2.9C13.8 2.9 13.6 2.7 13.6 2.3C13.6 1.9 13.8 1.7 14.2 1.7C14.6 1.7 14.8 1.9 14.8 2.3C14.8 2.7 14.5 2.9 14.2 2.9Z'
        />
        <path
          className={styles.sortedButton_svg}
          d='M14.2 6.40001H7.3C7 5.70001 6.4 5.20001 5.5 5.20001C4.6 5.20001 4 5.70001 3.8 6.40001H0.6C0.2 6.40001 0 6.60001 0 7.00001C0 7.40001 0.2 7.60001 0.6 7.60001H3.8C4 8.30001 4.8 8.80001 5.5 8.80001C6.2 8.80001 7 8.30001 7.3 7.60001H14.2C14.6 7.60001 14.8 7.40001 14.8 7.00001C14.8 6.60001 14.5 6.40001 14.2 6.40001ZM5.5 7.60001C5.2 7.60001 4.9 7.40001 4.9 7.00001C4.9 6.60001 5.1 6.40001 5.5 6.40001C5.9 6.40001 6.1 6.60001 6.1 7.00001C6.1 7.40001 5.9 7.60001 5.5 7.60001Z'
        />
        <path
          className={styles.sortedButton_svg}
          d='M14.2 11.1H12.2C12 10.4 11.3 9.89999 10.5 9.89999C9.6 9.89999 9 10.4 8.8 11.1H0.6C0.2 11.1 0 11.3 0 11.7C0 12.1 0.2 12.3 0.6 12.3H8.7C8.9 13 9.7 13.5 10.4 13.5C11.1 13.5 11.9 13 12.1 12.3H14.1C14.5 12.3 14.7 12.1 14.7 11.7C14.8 11.4 14.5 11.1 14.2 11.1ZM10.5 12.3C10.1 12.3 9.9 12.1 9.9 11.7C9.9 11.3 10.1 11.1 10.5 11.1C10.9 11.1 11.1 11.3 11.1 11.7C11.1 12.1 10.8 12.3 10.5 12.3Z'
        />
      </svg>
    </button>
  );
}

export default SortedButton;
