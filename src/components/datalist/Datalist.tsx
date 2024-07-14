import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setArtistLocal, setLocationLocal } from '../../store/reducers/sortedActiveSlice';

import styles from './datalist.module.scss';

import { ArtistData, LocationData } from '../../models/IPictureItem';

interface IDatalistProps {
  nameField: 'ARTIST' | 'LOCATION';
  artistData?: ArtistData[];
  locationData?: LocationData[];
}

function Datalist({ artistData = [], locationData = [], nameField }: IDatalistProps): JSX.Element {
  const dispatch = useAppDispatch();

  const isArtist = nameField === 'ARTIST';

  const active = isArtist
    ? useAppSelector(state => state.sortedActiveSlice.artistActive)
    : useAppSelector(state => state.sortedActiveSlice.locationActive);

  const [dataListActive, setDataListActive] = useState(false);

  useEffect(() => {
    if (!active && dataListActive) setDataListActive(false);
  }, [active]);

  const artistId = useAppSelector(state => state.sortedActiveSlice.artistLocal);
  const locationId = useAppSelector(state => state.sortedActiveSlice.locationLocal);
  const [filterData, setFilterData] = useState('');

  useEffect(() => {
    if (isArtist) {
      if (!artistId) {
        setFilterData('');
      }
    } else if (!locationId) {
      setFilterData('');
    }
  }, [artistId, locationId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData(event.target.value);
  };

  const handleDatalistClick = (value: number) => {
    if (isArtist) {
      dispatch(setArtistLocal(value));
      setFilterData(artistData?.find(artist => artist.id === value)?.name || '');
    } else {
      dispatch(setLocationLocal(value));
      setFilterData(locationData?.find(location => location.id === value)?.location || '');
    }

    if (dataListActive) {
      setDataListActive(false);
    }
  };

  return (
    <div className={`${styles.datalist}`}>
      <input
        className={`${styles.datalist_input} ${active ? styles.datalist_input_active : ''}`}
        type='text'
        placeholder={isArtist ? 'Search the artist' : 'Search the location'}
        value={filterData}
        onChange={handleChange}
        onFocus={() => setDataListActive(true)}
      />
      <button
        aria-label='Open datalist'
        type='button'
        className={`${styles.datalist_button} 
          ${active ? styles.datalist_button_active : ''}
          ${dataListActive && active ? styles.datalist_button_clicked : ''}`}
        onClick={() => setDataListActive(!dataListActive)}
      >
        <svg
          className={styles.datalist_button_svg}
          width='12'
          height='6'
          viewBox='0 0 12 6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 6L0.803848 0.75L11.1962 0.749999L6 6Z' fill='#9C9C9C' />
        </svg>
      </button>
      <ul className={`${styles.datalist_list} ${dataListActive && active ? styles.datalist_list_active : ''}`}>
        {isArtist &&
          artistData?.filter(artist => artist.name.includes(filterData)).length > 0 &&
          artistData
            .filter(artist => artist.name.includes(filterData))
            .map(artist => (
              <li
                key={artist.id}
                className={styles.datalist_li}
                onClick={() => handleDatalistClick(artist.id)}
                aria-hidden='true'
              >
                {artist.name}
              </li>
            ))}

        {!isArtist &&
          locationData?.filter(location => location.location.includes(filterData)).length > 0 &&
          locationData
            .filter(location => location.location.includes(filterData))
            .map(location => (
              <li
                key={location.id}
                className={styles.datalist_li}
                onClick={() => handleDatalistClick(location.id)}
                aria-hidden='true'
              >
                {location.location}
              </li>
            ))}

        {isArtist && artistData?.filter(artist => artist.name.includes(filterData)).length === 0 && (
          <li className={styles.datalist_span}>There are no matching results for your query.</li>
        )}

        {!isArtist && locationData?.filter(location => location.location.includes(filterData)).length === 0 && (
          <li className={styles.datalist_span}>There are no matching results for your query.</li>
        )}
      </ul>
    </div>
  );
}

Datalist.defaultProps = {
  artistData: [],
  locationData: [],
};

export default Datalist;
