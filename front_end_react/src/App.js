import './Styles/App.scss';
import CatwikiLogo from "./Assests/CatwikiLogo.svg";
import Image_2 from "./Assests/image 1.png";
import Image_1 from "./Assests/image 2.png";
import Image_3 from "./Assests/image 3.png";
import {useRef,useState} from 'react';
import useWindowsize from './Components/customHooks/useWindow';
import SearchModal from './Components/SearchModal';


function App() {

  const inputRef=useRef(null);
  const buttonRef=useRef(null);
  const window_val=useWindowsize();
  const [modal,setModal]=useState(false);


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

  return (
    <div className="App">

    <section class="section home">
      <div class="home-curve">
      <div class="top">
        <div>
        <span>Catwiki</span>
        <span>Get to know more about your cat breed</span>
        <div class="search-container" onClick={()=>enableModal()}>
          <input type="text" placeholder="Search" ref={inputRef}/>
          <button class="search__button" ref={buttonRef}>
          <i class="uil uil-search"></i>
          </button>
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
      <a href="/" class="anchor_tag">
       <span>READ MORE</span>
      <i class="uil uil-arrow-right"></i>
     </a>
     </div>
       <div class="images__grid">
         <img src={Image_1} alt="Not found"/>
         <img src={Image_2} alt="Not found"/>
         <img src={Image_3} alt="Not found"/>
      </div>
      </div>
      </section>




      {modal?<SearchModal modal={modal} setModal={setModal}/>:null}
    


    </div>
  );
}

export default App;
