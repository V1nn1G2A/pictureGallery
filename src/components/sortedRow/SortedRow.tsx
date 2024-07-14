import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import ShowButton from './sortedRowButton/SortedRowButton';
import { toggleFilter } from '../../store/reducers/sortedActiveSlice';
import styles from './sortedRow.module.scss';

import { IShowButtonProps } from '../../models/IShowButtonProps';

function SortedRow({ nameField }: IShowButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleFilter(nameField));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      dispatch(toggleFilter(nameField));
    }
  };

  return (
    <div className={styles.sorted_row}>
      <span
        className={styles.sorted_label}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        role='button'
        aria-label={`Toggle ${nameField} filter`}
      >
        {nameField}:
      </span>
      <ShowButton nameField={nameField} />
    </div>
  );
}

export default SortedRow;
