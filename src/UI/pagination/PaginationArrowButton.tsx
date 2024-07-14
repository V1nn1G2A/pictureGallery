import React from 'react';
import { setCurrentPage } from '../../store/reducers/paginationSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './pagination.module.scss';

interface PaginationArrowButtonProps {
  direction: 'prev' | 'next';
  disabled: boolean;
}

function PaginationArrowButton({ direction, disabled }: PaginationArrowButtonProps) {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.paginationReducer.currentPage);

  const handleClick = () => {
    if (direction === 'prev') {
      dispatch(setCurrentPage(currentPage - 1));
    } else if (direction === 'next') {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <li className={styles.pagination_item}>
      <button
        type='button'
        aria-label={direction === 'prev' ? 'Previous Page' : 'Next Page'}
        className={`${styles.pagination_button} ${styles.pagination_arrow}`}
        disabled={disabled}
        onClick={handleClick}
      />
    </li>
  );
}

export default PaginationArrowButton;
