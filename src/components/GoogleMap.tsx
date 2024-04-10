import { GoogleMap, Marker, LoadScriptNext } from "@react-google-maps/api";

const MapContainer = ({ APIKEY }: { APIKEY: string }) => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.006,
  };

  return (
    <LoadScriptNext
      googleMapsApiKey={APIKEY}
      onLoad={() => console.log("Google Maps API loaded")}
      loadingElement={<div>Loading...</div>}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
