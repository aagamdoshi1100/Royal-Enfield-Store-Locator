import { DealerTypes } from "./dealer";

export interface Coordinates {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy: number;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}

export interface Position {
  timestamp: number;
  coords: Coordinates;
}
export interface GeolocationPositionErrorTypes {
  code: number;
  message: string;
}
export interface MapProps {
  mapMarkerData: DealerTypes[];
}
