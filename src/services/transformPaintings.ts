import { useFetchAllNamesQuery, useFetchAllLocationsQuery } from './pictureService';

import { ArtistData, LocationData, IFullPicture, IPicture } from '../models/IPictureItem';

const transformPaintings = (response: IPicture[]): IFullPicture[] => {
  const artists: ArtistData[] = useFetchAllNamesQuery().data || [];
  const locations: LocationData[] = useFetchAllLocationsQuery().data || [];

  return response.map((picture: IPicture) => ({
    ...picture,
    artist: artists.find(artist => artist.id === picture.authorId)?.name || 'Undefined',
    location: locations.find(location => location.id === picture.locationId)?.location || 'Undefined',
  }));
};

export default transformPaintings;
