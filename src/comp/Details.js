import { useLocation } from "./Context/LocationContext";
import Loading from "./Loading";
import NotFound from "./NotFound";

const Details = () => {
    const {result,load,}=useLocation();
    console.log(result.message);

    if(result.message==="invalid query"){
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
            {result.query}
          </span>
        </div>     

        <div className="underline"></div> 

        <div className="container detail-container">
          <span className="detail-head">
            location
          </span>
          <span className="detail-subhead">
            {result.city} {result.region} {result.country}
          </span>
        </div>   

        <div className="underline"></div> 


        <div className="container detail-container">
          <span className="detail-head">
            timezone
          </span>
          <span className="detail-subhead">
            {result.timezone}
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