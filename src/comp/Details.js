import { useLocation } from "./Context/LocationContext";

const Details = () => {
    const {result}=useLocation();
    

    if(result){
    return ( 
        <div className="details-container">
            <div className="container">
              <div className="row">
                <div className='detail col-xl-3 '>
                  <span className="div-head">
                    ip address
                  </span>
                  <span className="div-sub-head ">
                    {result.query}
                  </span>
                </div>
                <div className='detail col-xl-3 '>
                  <span className="div-head">
                    location
                  </span>
                  <span className="div-sub-head">
                    {result.city} {result.regionName} {result.country}
                  </span>
                </div>

                <div className='detail col-xl-3 '>
                  <span className="div-head">
                    TimeZone
                  </span>
                  <span className="div-sub-head">
                    {result.timezone}
                </span>
                </div>

                <div className='detail col-xl-3 '>
                  <span className="div-head">
                    ISP
                  </span>
                  <span className="div-sub-head">
                    { result.isp &&
                    result.isp.substring(0,17)
                    }
                </span>
              </div>
            </div>
          </div>
        </div>

     );
    }
    else{
      <div className="loading">
        <h4>Loading</h4>
      </div>
    }
}
 
export default Details;