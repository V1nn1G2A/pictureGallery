import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IPaginationProps } from '../../models/IPagination';

import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './pagination.module.scss';

import PaginationButton from './PaginationButton';
import PaginationDots from './PaginationDots';
import PaginationArrowButton from './PaginationArrowButton';

function Pagination({ totalCount = 60, siblingCount = 1, pageSize = 6 }: IPaginationProps) {
  const currentPage = useAppSelector(state => state.paginationReducer.currentPage);
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={styles.pagination}>
      <PaginationArrowButton direction='prev' disabled={currentPage === 1} />

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <PaginationDots key={`dots-${currentPage}`} />;
        }

        return (
          <PaginationButton key={`page-${pageNumber}`} pageNumber={pageNumber} isActive={pageNumber === currentPage} />
        );
      })}

      <PaginationArrowButton direction='next' disabled={currentPage === lastPage} />
    </ul>
  );
}

export default Pagination;
