import React, { useEffect, useState } from 'react';
import ThemeButton from '../../UI/themeButton/ThemeButton';
import styles from './header.module.scss';
import logoDark from '../../assets/logoDark.svg';
import logoLight from '../../assets/logoLight.svg';
import { useAppSelector } from '../../hooks/redux';
import container from '../../index.module.scss';

function Header() {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const [logo, setLogo] = useState(theme === 'dark' ? logoDark : logoLight);

  useEffect(() => {
    setLogo(theme === 'dark' ? logoDark : logoLight);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={container.container}>
        <div className={styles.header_content}>
          <img className={styles.header_logo} src={logo} alt='logo' />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
