export interface IPicture {
  id: number;
  imageUrl: string;
  name: string;
  authorId: number;
  created: string;
  locationId: number;
}

export interface ArtistData {
  id: number;
  name: string;
}

export interface LocationData {
  id: number;
  location: string;
}

export interface IFullPicture extends IPicture {
  artist: string;
  location: string;
}
