import { useContext, useState,useEffect } from "react";
import React from "react";

const LocationContext=React.createContext();

const LocationProvider=({children})=>{
    const [search,setSearch]=useState("");
    const [result,setResult]=useState({});

    useEffect(()=>{
        const controller=new AbortController();
        const getAddress=async()=>{
            try{
                const response=await fetch(`http://ip-api.com/json/${search}`,{signal:controller.signal});
                const result=await response.json();
                setResult(result);
            }catch(err){
                console.log(err);
            }
        }
        getAddress();
        return ()=>controller?.abort();
     
      },[])

    return (
        <LocationContext.Provider value={{
            setSearch,
            result
        }}>
            {children}
        </LocationContext.Provider>
    )
}


const useLocation=()=>{
    return useContext(LocationContext);
}

export  {LocationContext,LocationProvider,useLocation}