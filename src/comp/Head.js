import { useEffect, useState } from 'react';
import arrow from '../images/icon-arrow.svg'
import {useLocation} from './Context/LocationContext'


const Head = () => {
  const {setSearch,result}=useLocation();
    const [ip,setIp]=useState("");

    const getLocation=(e)=>{
          e.preventDefault();
          console.log(ip);
          setSearch(ip);
          console.log(result);
    }


    return (
        <div className="head-container">
        <div className="container">
        <h1 className="text-center">IP Adress Tracker</h1>
          <form className='d-flex justify-content-center head-form' onClick={(e)=>getLocation(e)}>
            <div className="input-group row form-container">
              <input type="text" className="form-control form-input-color col-xl-11 col-10 " 
              value={ip} onChange={(e)=>setIp(e.target.value)} />
                <button className="btn btn-primary btn-color col-xl-1 col-2	"><img src={arrow} alt="arrow" /></button>  
            </div>
          </form>
          </div>
        </div>
      );
}
 
export default Head;