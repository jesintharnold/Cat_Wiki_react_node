import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import data from '../cat.json';
import "../Styles/SearchModal.scss";
const SearchModal=({modal,setModal})=>{
   
    const [suggest,setSuggest]=useState([]);
    const [text,setText]=useState("");
    const input_ref=useRef();



    

    const onchange=(val)=>{
        
       if(val!==(" "&&"")){
        const func_dat=data["cat"].filter(({first_name})=>{
            return first_name.toLocaleLowerCase().includes(val.toLocaleLowerCase())
        });

        setSuggest(func_dat);
       }else{
           setSuggest([]);
       }
    };

    const valChange=(textval)=>{
           console.log(textval);
           setText(textval);
           input_ref.current.value=textval;
           setSuggest([]);
           
    };

    return ReactDom.createPortal (
    <div className="modal_wrapper">
    <div className="modal-container">
    <div className="close_modal"  onClick={()=>setModal(!modal)}><i class="uil uil-times"></i></div>    
    <div className={`modal-search  search-container`}>
          <input type="text" placeholder="Search" ref={input_ref}  onChange={(e)=>onchange(e.target.value)}/>
          <button class="search__button">
          <i class="uil uil-search"></i>
          </button>
    </div>
    <div className="recommends" >
    {(suggest && suggest.length>0)?(
        suggest.map(({first_name},index)=><div key={index} onClick={()=>valChange(first_name)}>{first_name}</div>)
    ):null}

      
    </div>

    </div>

    </div>,
    document.getElementById("modal")
    )
}


export default SearchModal;