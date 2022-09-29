import lottie from 'lottie-web'
import { useEffect, useRef, useState } from 'react';
import loading from '../images/loading.json'

const Loading = () => {
    const [isLoading,setIsLoading]=useState(true);
    const container=useRef(null);

    useEffect(()=>{
        const inst=lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            autoplay:true,
            animationData:loading
        });

        return ()=>inst.destroy();
    },[])

    return ( 
        <div className="loading" ref={container}>
        </div>
    );
}
 
export default Loading;