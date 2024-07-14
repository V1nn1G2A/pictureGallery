import React from 'react';
import { DOTS } from '../../hooks/usePagination';
import styles from './pagination.module.scss';

function PaginationDots() {
  return <li className={styles.pagination_item}>{DOTS}</li>;
}

export default PaginationDots;
