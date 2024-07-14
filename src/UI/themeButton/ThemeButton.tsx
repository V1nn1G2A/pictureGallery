import React from 'react';
import { themeSlice } from '../../store/reducers/themeSlice';
import { useAppDispatch } from '../../hooks/redux';
import styles from './themeButton.module.scss';

function ThemeButton() {
  const { setTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <button
      type='button'
      aria-label='Сменить тему приложения'
      className={styles.themeButton}
      onClick={() => dispatch(setTheme())}
    />
  );
}

export default ThemeButton;
