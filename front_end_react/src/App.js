import './Styles/App.scss';
import CatwikiLogo from "./Assests/CatwikiLogo.svg";
import Image_2 from "./Assests/image 1.png";
import Image_1 from "./Assests/image 2.png";
import Image_3 from "./Assests/image 3.png";



function App() {
  return (
    <div className="App">

    <section class="section home">
      <div class="home-curve">
      <div class="top">
        <div>
        <span>Catwiki</span>
        <span>Get to know more about your cat breed</span>
        <div class="search-container">
          <input type="text" placeholder="Search"/>
          <button class="search__button">
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





    


    </div>
  );
}

export default App;
