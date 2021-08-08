import {useEffect,useState} from 'react';

const useWindowsize=()=>{

    const [windowsize,setwindowsize]=useState({
        width:undefined,
        height:undefined
    });


    function Resize(){
        setwindowsize({
            width:window.innerWidth,
            height:window.innerHeight
        });
    }

    useEffect(()=>{
        window.addEventListener("resize",Resize);
        Resize();
        return ()=>window.removeEventListener("resize",Resize);
    },[]);

    return windowsize;
}


export default useWindowsize;