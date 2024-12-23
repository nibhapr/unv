import { GoogleMap, Marker, LoadScriptNext ,InfoWindow} from "@react-google-maps/api";

const MapContainer = ({ APIKEY }: { APIKEY: string }) => {
  const mapStyles = {
    height: "100%",
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
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={placeCoordinates}>
       
        <InfoWindow position={placeCoordinates}>
        
        <div>
          <h4 style= {{color:"blue",fontWeight:"bold",fontSize:"18px"}}>unvdubai Technology</h4>
          <p style = {{color:"blue", fontWeight: "bold"}}>UNV National Distributor in DUBAI,U.A.E</p>
          <p style = {{color: "blue"}}>Mobile: +971555529469 </p>
        </div>

        </InfoWindow>
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
