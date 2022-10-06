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
        <div className=" detail-container">
          <h3 className="detail-head">
            ip address
          </h3>
          <p className="detail-subhead">
            {result.ip}
          </p>
        </div>     

        <div className="underline"></div> 

        <div className=" detail-container">
          <h3 className="detail-head">
            location
          </h3>
          <p className="detail-subhead">
            {result.location.city} {result.location.region.substring(8)} {result.location.country}
          </p>
        </div>   

        <div className="underline"></div> 


        <div className=" detail-container">
          <h3 className="detail-head">
            timezone
          </h3>
          <p className="detail-subhead">
            {result.location.timezone}
          </p>
        </div> 

        <div className="underline"></div> 


        <div className=" detail-container">
          <h3 className="detail-head">
            isp
          </h3>
          <p className="detail-subhead">
            { result.isp && 
            result.isp.substring(0,17)}
          </p>
        </div> 
      </section>
    )
    }
}
 
export default Details;