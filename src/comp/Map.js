import { useLocation } from "./Context/LocationContext";
import NotFound from "./NotFound";

const Map = () => {
    const {result,load}=useLocation();
    let url=undefined

    if(result.messages==="Input correct IPv4 or IPv6 address."){
        return(
            <div className="map-container">
                <NotFound notFound={'not-found-map not-found'}/>
            </div>
        )
    }


    if(!load){
    url=`
        https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_KEY}&q=${result.location.city},${result.location.region}+${result.location.country}&zoom=11.9
    `
    }

    if(load || url===undefined){
        return (
            <div className="loading-map">
                loading....
            </div>
        )
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

