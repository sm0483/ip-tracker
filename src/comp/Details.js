import { useLocation } from "./Context/LocationContext";
import Loading from "./Loading";
import NotFound from "./NotFound";

const Details = () => {
    const {result,load,}=useLocation();
    console.log(result.location +"cat");
    console.log(result.ip);

    // const {city,country,region,timezone}=result.location;

    if(result.messages==="Input correct IPv4 or IPv6 address."){
      return(
          <div className="details-container">
              <NotFound notFound={"not-found"}/>
          </div>
      )
    }

    
    if(load){
      return(
        <div className="details-container">
            <Loading/>
        </div>

      ) 
    }else{

    return(
      <section className="details-container">
        <div className="container detail-container">
          <span className="detail-head">
            ip address
          </span>
          <span className="detail-subhead">
            {result.ip}
          </span>
        </div>     

        <div className="underline"></div> 

        <div className="container detail-container">
          <span className="detail-head">
            location
          </span>
          <span className="detail-subhead">
            {result.location.city} {result.location.region.substring(8)} {result.location.country}
          </span>
        </div>   

        <div className="underline"></div> 


        <div className="container detail-container">
          <span className="detail-head">
            timezone
          </span>
          <span className="detail-subhead">
            {result.location.timezone}
          </span>
        </div> 

        <div className="underline"></div> 


        <div className="container detail-container">
          <span className="detail-head">
            isp
          </span>
          <span className="detail-subhead">
            { result.isp && 
            result.isp.substring(0,17)}
          </span>
        </div> 
      </section>
    )
    }
}
 
export default Details;