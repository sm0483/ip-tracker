import { useLocation } from "./Context/LocationContext";
import Loading from "./Loading";

const Map = () => {
    const {result}=useLocation();
    const {country,city,regionName,load}=result;
    const url=`
        https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_KEY}&q=${city},${regionName}+${country} &zoom=15
    `

    if(load){
        return <Loading/>
    }else{
    return (
        <div className="container-fluid map-container">
            <iframe   src={url} title="location-map"
        ></iframe>
        </div>
      );
    }
}
 
export default Map;

