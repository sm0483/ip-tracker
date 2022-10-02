import { useContext, useState,useEffect } from "react";
import React from "react";

const LocationContext=React.createContext();


const LocationProvider=({children})=>{
    const [search,setSearch]=useState("");
    const [result,setResult]=useState({});
    const [wait ,setWait]=useState(false);
    const [load,setLoad]=useState(true);

    const getData=()=>{
        setWait((value)=>{
            const newWait=!value;
            return newWait;
        })
    }

    const url=`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_KEY}&ipAddress=${search}`

    useEffect(()=>{
        const controller=new AbortController();
        fetch(url,{signal:controller.signal})
        .then(response=>response.json())
        .then((data)=>{
            setResult(data);
            setLoad(false);
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
        return ()=>controller?.abort();
     
      },[wait])

    return (
        <LocationContext.Provider value={{
            setSearch,
            result,
            getData,
            load,
            
        }}>
            {children}
        </LocationContext.Provider>
    )
}


const useLocation=()=>{
    return useContext(LocationContext);
}

export  {LocationContext,LocationProvider,useLocation}