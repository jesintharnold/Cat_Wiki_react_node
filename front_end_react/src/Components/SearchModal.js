import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import data from '../cat.json';
import "../Styles/SearchModal.scss";
const SearchModal=({modal,setModal,onchange,suggest,setSuggest,text,setText,valChange})=>{

    const input_ref=useRef();

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
        suggest.map(({first_name},index)=><div key={index} onClick={()=>valChange(first_name,input_ref)}>{first_name}</div>)
    ):null}

      
    </div>

    </div>

    </div>,
    document.getElementById("modal")
    )
}


export default SearchModal;