import './Styles/App.scss';
import CatwikiLogo from "./Assests/CatwikiLogo.svg";
import Image_2 from "./Assests/image 1.png";
import Image_1 from "./Assests/image 2.png";
import Image_3 from "./Assests/image 3.png";
import {useRef,useState} from 'react';
import useWindowsize from './Components/customHooks/useWindow';
import SearchModal from './Components/SearchModal';
import "./Styles/SearchModal.scss";
import data from './cat.json';
import { Link } from 'react-router-dom';

function App() {

  const inputRef=useRef(null);
  const buttonRef=useRef(null);
  const window_val=useWindowsize();
  const [modal,setModal]=useState(false);
  const [suggest,setSuggest]=useState([]);
  const [text,setText]=useState("");
  



  const enableModal=()=>{
      console.log(`Enable - Modal - Screen`);

      console.log(window_val.width);

      if(window_val.width<=480){
      buttonRef.current.disabled=true;
      inputRef.current.disabled=true;
      setModal(true);
      }else{
        setModal(false);
      buttonRef.current.disabled=false;
      inputRef.current.disabled=false;
      
      
      }

      

  }


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

 const valChange=(textval,ref_val)=>{
        console.log(textval);
        setText(textval);
        ref_val.current.value=textval;
        setSuggest([]);
        };

  return (
    <div className="App">

    <section class="section home">
      <div class="home-curve">
      <div class="top">
        <div className="center_div">
        <span>Catwiki</span>
        <span>Get to know more about your cat breed</span>
        <div className="container_wrap">
        <div class="search-container" onClick={()=>enableModal()}>
          <input type="text" placeholder="Search" ref={inputRef} onChange={(e)=>onchange(e.target.value)}/>
          <button class="search__button" ref={buttonRef}>
          <i class="uil uil-search"></i>
          </button>
        </div>
        <div className="recommend">
        {(suggest && suggest.length>0)?(
        suggest.map(({first_name},index)=><div key={index} onClick={()=>valChange(first_name,inputRef)}>{first_name}</div>)
    ):null}

        </div>
        </div>
        </div>
        </div>
      <div class="bottom">
      <span class="first_cap">Most Searched Breeds</span>
  
      <div class="second_cap">66+ Breeds For you to discover</div>

      <div class="grid__container">

      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bhht8pfAzSCZVYFmAPt3UxleZpvZjrBlHRL_3jTSO_QOWw3OhHDHb1zdtK7IKUcg3Bo&usqp=CAU" alt="Not found" />
      <span class="figure__caption">
        Bengal
      </span>
      </div>

      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bhht8pfAzSCZVYFmAPt3UxleZpvZjrBlHRL_3jTSO_QOWw3OhHDHb1zdtK7IKUcg3Bo&usqp=CAU" alt="Not found" />
      <span class="figure__caption">
        Bengal
      </span>
      </div>

      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bhht8pfAzSCZVYFmAPt3UxleZpvZjrBlHRL_3jTSO_QOWw3OhHDHb1zdtK7IKUcg3Bo&usqp=CAU" alt="Not found" />
      <span class="figure__caption">
        Bengal
      </span>
      </div>

      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bhht8pfAzSCZVYFmAPt3UxleZpvZjrBlHRL_3jTSO_QOWw3OhHDHb1zdtK7IKUcg3Bo&usqp=CAU" alt="Not found" />
      <span class="figure__caption">
        Bengal
      </span>
      </div></div></div>
      </div>
    </section>
    <section class="section bottom__sec">
      <div class="secondhome">
      <div class="secondhome__flex">  
      <span class="thirdcap">Why should you have a cat?</span>
      <span>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</span>
      <Link to="/top" class="anchor_tag">
       <span>READ MORE</span>
      <i class="uil uil-arrow-right"></i>
     </Link>
     </div>
       <div class="images__grid">
         <img src={Image_1} alt="Not found"/>
         <img src={Image_2} alt="Not found"/>
         <img src={Image_3} alt="Not found"/>
      </div>
      </div>
      </section>




      {modal?<SearchModal modal={modal} setModal={setModal} onchange={onchange} suggest={suggest} setSuggest={setSuggest} text={text} setText={setText} valChange={valChange} />:null}
    


    </div>
  );
}

export default App;
