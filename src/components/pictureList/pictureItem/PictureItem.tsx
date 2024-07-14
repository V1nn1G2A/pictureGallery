import React, { useState } from 'react';
import styles from './pictureItem.module.scss';
import { IFullPicture } from '../../../models/IPictureItem';

function PictureItem({ imageUrl, name, artist, created, location }: IFullPicture) {
  const [active, setActive] = useState(false);

  return (
    <li className={styles.pictureItem}>
      <img className={styles.pictureItem_picture} src={`https://test-front.framework.team/${imageUrl}`} alt='' />
      <div className={styles.pictureItem_info}>
        <h3 className={`${styles.pictureItem_name} ${active ? styles.pictureItem_name_active : ''}`}>
          {name.toUpperCase()}
        </h3>
        <h3 className={`${styles.pictureItem_artist} ${active ? styles.pictureItem_artist_active : ''}`}>
          {artist.toUpperCase()}
        </h3>
        <p className={`${styles.pictureItem_year} ${active ? styles.pictureItem_year_active : ''}`}>
          {created.toUpperCase()}
        </p>
        <p className={`${styles.pictureItem_location} ${active ? styles.pictureItem_location_active : ''}`}>
          {location.toUpperCase()}
        </p>
      </div>
      <button
        className={`${styles.pictureItem_button} ${active ? styles.pictureItem_button_active : ''}`}
        type='button'
        aria-label='Author + Location'
        onClick={() => setActive(!active)}
      >
        <svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 5C0 4.85268 0.0602 4.71139 0.167357 4.60722C0.274514 4.50305 0.41985 4.44452 0.571392 4.44452L14.0482 4.44452L10.4519 0.949457C10.3446 0.845154 10.2843 0.703687 10.2843 0.556179C10.2843 0.408671 10.3446 0.267204 10.4519 0.162901C10.5592 0.0585966 10.7047 0 10.8565 0C11.0082 0 11.1537 0.0585966 11.261 0.162901L15.8321 4.60672C15.8853 4.65832 15.9276 4.71962 15.9564 4.7871C15.9852 4.85459 16 4.92694 16 5C16 5.07306 15.9852 5.14541 15.9564 5.2129C15.9276 5.28038 15.8853 5.34168 15.8321 5.39328L11.261 9.8371C11.1537 9.9414 11.0082 10 10.8565 10C10.7047 10 10.5592 9.9414 10.4519 9.8371C10.3446 9.7328 10.2843 9.59133 10.2843 9.44382C10.2843 9.29631 10.3446 9.15485 10.4519 9.05054L14.0482 5.55548L0.571392 5.55548C0.41985 5.55548 0.274514 5.49695 0.167357 5.39278C0.0602 5.28861 0 5.14732 0 5Z'
            fill='#DEDEDE'
          />
        </svg>
      </button>
    </li>
  );
}

export default PictureItem;
