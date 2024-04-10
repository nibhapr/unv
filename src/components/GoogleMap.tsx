import { GoogleMap, Marker, LoadScriptNext } from "@react-google-maps/api";

const MapContainer = ({ APIKEY }: { APIKEY: string }) => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 25.274335861049373,
    lng: 55.30929698916229,
  };
  const placeCoordinates = {
    lat: 25.2735015, 
    lng: 55.3091897,
  };
  
  return (
    <LoadScriptNext
      googleMapsApiKey={APIKEY}
      onLoad={() => console.log("Google Maps API loaded")}
      loadingElement={<div>Loading...</div>}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={21} center={placeCoordinates}>
        <Marker position={placeCoordinates} />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
