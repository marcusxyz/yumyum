import { useMemo, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { MapWrapper, PageTitle } from './styles';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef();

  const options = useMemo(
    () => ({
      mapId: '4d95ab17ec33de51',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <MapWrapper>
      <PageTitle>Find us here!</PageTitle>
      <GoogleMap
        zoom={15}
        options={options}
        onLoad={onLoad}
        center={{ lat: 57.705947610723705, lng: 11.936381468718013 }}
        mapContainerClassName='map-container'
      >
        <Marker
          position={{ lat: 57.705947610723705, lng: 11.936381468718013 }}
        />
      </GoogleMap>
    </MapWrapper>
  );
};

export default Map;
