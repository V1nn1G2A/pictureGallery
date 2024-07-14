import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import styles from './inputYear.module.scss';
import { setYearFromLocal, setYearToLocal, setNanError, setEnterError } from '../../store/reducers/sortedActiveSlice';

function InputYear() {
  const yearActive = useAppSelector(state => state.sortedActiveSlice.yearActive);
  const yearFrom = useAppSelector(state => state.sortedActiveSlice.yearFromLocal);
  const yearTo = useAppSelector(state => state.sortedActiveSlice.yearToLocal);

  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    if (id === 'yearFrom') {
      dispatch(setYearFromLocal(value));
    } else if (id === 'yearTo') {
      dispatch(setYearToLocal(value));
    }
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
      dispatch(setNanError(true));
      return;
    }
    dispatch(setNanError(false));

    if (id === 'yearFrom') {
      if (numericValue > Number(yearTo)) {
        dispatch(setEnterError(true));
      } else {
        dispatch(setEnterError(false));
      }
    } else if (id === 'yearTo') {
      if (numericValue < Number(yearFrom)) {
        dispatch(setEnterError(true));
      } else {
        dispatch(setEnterError(false));
      }
    }
  };

  return (
    <div className={`${styles.inputYear} ${yearActive ? styles.inputYear_active : ''}`}>
      <input
        id='yearFrom'
        type='text'
        className={styles.inputYear_input}
        placeholder='From'
        value={yearFrom}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <span className={styles.inputYear_span}>—</span>
      <input
        id='yearTo'
        type='text'
        className={styles.inputYear_input}
        placeholder='To'
        value={yearTo}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default InputYear;
