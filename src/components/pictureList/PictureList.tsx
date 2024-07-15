import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

import PictureItem from './pictureItem/PictureItem';
import Pagination from '../../UI/pagination/Pagination';
import SearchAndSorted from '../serachAndSorted/SearchAndSorted';

import pictureAPI from '../../services/pictureService';
import { IFullPicture } from '../../models/IPictureItem';
import transformPaintings from '../../services/transformPaintings';

import styles from './pictureList.module.scss';
import loader from './loader.module.scss';
import container from '../../index.module.scss';

import {
  setArtist,
  setLocation,
  setYearFrom,
  setYearTo,
  setFindString,
} from '../../store/reducers/sortedSlice';

function PictureList() {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(
    (state) => state.paginationReducer.currentPage
  );
  const findString = useAppSelector((state) => state.sortedReducer.findString);
  const artist = useAppSelector((state) => state.sortedReducer.artist);
  const location = useAppSelector((state) => state.sortedReducer.location);
  const yearFrom = useAppSelector((state) => state.sortedReducer.yearFrom);
  const yearTo = useAppSelector((state) => state.sortedReducer.yearTo);

  const limit = 6;

  const { data, error, isLoading } = pictureAPI.useFetchAllPicturesQuery({
    limit,
    page: currentPage,
    findString,
    authorId: artist || undefined,
    locationId: location || undefined,
    yearFrom: yearFrom || undefined,
    yearTo: yearTo || undefined,
  });

  const paintings: IFullPicture[] = transformPaintings(data?.data || []);

  if (isLoading) {
    return <div className={`${loader.loader} ${styles.pictureList_loader}`} />;
  }

  if (error) {
    let errorMessage = 'An error occurred';
    if ('status' in error) {
      errorMessage = `Error: ${error.status}`;
    } else if ('message' in error && error.message) {
      errorMessage = error.message;
    }

    return <div className={styles.error}>{errorMessage}</div>;
  }

  if (!data || !Array.isArray(data.data)) {
    return <div className={styles.error}>Data is not an array</div>;
  }

  const handleClickEnter = () => {
    dispatch(setArtist(0));
    dispatch(setLocation(0));
    dispatch(setYearFrom(''));
    dispatch(setYearTo(''));
    dispatch(setFindString(''));
  };

  return (
    <div className={container.container}>
      <SearchAndSorted />
      <ul className={styles.pictureList}>
        {data.totalCount ? (
          paintings
            .slice(0, limit)
            .map((picture: IFullPicture) => (
              <PictureItem
                key={picture.id}
                id={picture.id}
                imageUrl={picture.imageUrl ?? ''}
                name={picture.name ?? ''}
                artist={picture.artist ?? ''}
                created={picture.created ?? ''}
                location={picture.location ?? ''}
                authorId={picture.authorId}
                locationId={picture.locationId}
              />
            ))
        ) : (
          <div className={styles.noMatches}>
            <p className={styles.noMatches_result}>
              No matches for{' '}
              <button
                className={styles.noMatches_findString}
                type="button"
                onClick={handleClickEnter}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleClickEnter();
                  }
                }}>
                {findString === '' ? 'your classification' : findString}
              </button>
            </p>
            <p className={styles.noMatches_tryAgain}>
              Please try again with a different spelling or keywords.
            </p>
          </div>
        )}
      </ul>
      <Pagination
        totalCount={data.totalCount}
        currentPage={currentPage}
        pageSize={6}
      />
    </div>
  );
}

export default PictureList;
