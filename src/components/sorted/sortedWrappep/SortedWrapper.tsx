import React from 'react';
import styles from '../sorted.module.scss';
import SortedRow from '../../sortedRow/SortedRow';
import Datalist from '../../datalist/Datalist';
import InputYear from '../../inputYear/InputYear';
import { IShowButtonProps } from '../../../models/IShowButtonProps';
import { ArtistData, LocationData } from '../../../models/IPictureItem';
import pictureAPI from '../../../services/pictureService';

function SortedWrapper({ nameField }: IShowButtonProps) {
  const artists: ArtistData[] = pictureAPI.useFetchAllNamesQuery().data || [];
  const locations: LocationData[] = pictureAPI.useFetchAllLocationsQuery().data || [];

  const renderContent = () => {
    switch (nameField) {
      case 'ARTIST':
        return <Datalist nameField={nameField} artistData={artists} />;
      case 'LOCATION':
        return <Datalist nameField={nameField} locationData={locations} />;
      default:
        return <InputYear />;
    }
  };

  return (
    <div className={styles.sorted_wrapper}>
      <SortedRow nameField={nameField} />
      {renderContent()}
    </div>
  );
}

export default SortedWrapper;
