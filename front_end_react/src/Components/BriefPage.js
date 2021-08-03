import "../Styles/BriefPage.scss";
import Progressbar from "./ReusableComponents/ProgressBar";


const BriefPage=()=>{
  return (
    <div>
    <div className="BriefPage__container">
    <div className="image"><img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/></div>
    <div className="brief_flex__container">
    <div className="first">Bengal</div>
    <div className="second">Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</div>
    
    <div className="details">
      <h>Temperament:</h>
      <span>Alert,Agile,Energetic,hello and good</span>
    </div>

    <div className="details"><h>Origin:</h><span>United States</span></div>
    <div className="details"><h>Life Span:</h><span> 12 - 15 years</span></div>

    <div className="gridcontent">
    <h>Adaptability:</h>
    <Progressbar/>
    <h>Affection level:</h>
    <Progressbar/>
    <h>Child Friendly:</h>
    <Progressbar/>
    <h>Grooming:</h>
    <Progressbar/>
    <h>Intelligence:</h>
    <Progressbar/>
    <h>Health issues:</h>
    <Progressbar/>
    <h>Social needs:</h>
    <Progressbar/>
    </div>
    </div>
    </div> 
  
    <span className="other">Other photos</span>
    <div className="image__photos">
    
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>
    <img src="https://unsplash.com/photos/p6yH8VmGqxo/download?force=true&w=640" alt="Not Found"/>

    </div>
  </div>
    );
};

export default BriefPage