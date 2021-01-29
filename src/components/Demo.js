import { geolocated } from "react-geolocated";

const Demo = ({
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords
}) => {
    return !isGeolocationAvailable ? ( <div>Not support </div>)



      : !isGeolocationEnabled ? (<div>Nope</div>) : coords ? (

<div><p>Latitude:{coords.latitude}</p>

<p>Longitude:{coords.longitude}</p></div>

      ) : (<div>Getting the location data&hellip; </div> )
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
}) (Demo);