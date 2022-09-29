import { useState } from 'react';
import arrow from '../images/icon-arrow.svg'
import {useLocation} from './Context/LocationContext'


const Head = () => {
  const {setSearch,result,getData}=useLocation();
    const [ip,setIp]=useState("");

    const getLocation=()=>{
          console.log(ip);
          setSearch(ip);
          getData();
          console.log(result);
    }


    return (
        <div className="head-container ">
            <h1 className="text-center pt-4 pb-2">IP Adress Tracker</h1>
          <div className="container d-flex justify-content-center">
                <div className="input-group  input-container ">
                    <input type="text" className="form-control input-radious"  
                    aria-label="Recipient's username" aria-describedby="button-addon2"
                    placeholder='Search for any ip address or domain'
                    value={ip}
                    onChange={(e)=>setIp(e.target.value)}
                    />
                    <button 
                    className=" button btn btn-primary btn-lg "
                    type="submit"
                    onClick={()=>getLocation()}
                    >
                      <img src={arrow} className="image-fluid " alt="arrow"  />
                    </button>
                </div>
            </div>
        </div>
      );
}
 
export default Head;