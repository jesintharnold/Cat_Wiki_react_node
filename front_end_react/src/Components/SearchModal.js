import React from "react";
import ReactDom from "react-dom";


import "./SearchModal.scss";
const SearchModal=({modal,setModal})=>{
    return ReactDom.createPortal (
    <div className="modal_wrapper">
    <div className="modal-container">
    <div className="close_modal"  onClick={()=>setModal(!modal)}><i class="uil uil-times"></i></div>    
    <div className={`modal-search  search-container`}>
          <input type="text" placeholder="Search"/>
          <button class="search__button">
          <i class="uil uil-search"></i>
          </button>
    </div>
    <div className="recommends">
    

      
    </div>

    </div>

    </div>,
    document.getElementById("modal")
    )
}


export default SearchModal;