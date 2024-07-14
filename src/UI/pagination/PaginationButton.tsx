import React from 'react';
import { setCurrentPage } from '../../store/reducers/paginationSlice';
import { useAppDispatch } from '../../hooks/redux';
import styles from './pagination.module.scss';

interface PaginationButtonProps {
  pageNumber: number | string;
  isActive: boolean;
}

function PaginationButton({ pageNumber, isActive }: PaginationButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (typeof pageNumber === 'number') {
      dispatch(setCurrentPage(pageNumber));
    }
  };

  return (
    <li className={styles.pagination_item}>
      <button
        type='button'
        className={`${styles.pagination_button} ${isActive ? styles.pagination_selected : ''}`}
        onClick={handleClick}
      >
        {pageNumber}
      </button>
    </li>
  );
}

export default PaginationButton;
