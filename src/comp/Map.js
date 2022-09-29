import { useLocation } from "./Context/LocationContext";

const Map = () => {
    const {result}=useLocation();
    const {country,city,regionName}=result;
    const url=`
        https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_KEY}&q=${city},${regionName}+${country} &zoom=15
    `
    return (
        <div className="container-fluid map-container">
            <iframe   src={url} 
        ></iframe>
        </div>
      );
}
 
export default Map;

