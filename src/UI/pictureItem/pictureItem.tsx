import React from 'react';
import styles from './pictureItem.module.scss';

const PictureItem = () => {
  return (
    <li className={styles.pictureItem}>
      <img
        src="https://test-front.framework.team/images/The_ninth_wave.jpeg"
        alt=""
      />
      <div>
        <p>The ninth wave</p>
        <p>1850</p>
      </div>
    </li>
  );
};

export default PictureItem;
