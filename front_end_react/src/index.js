import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';

import App from './App';
import Progressbar from './Components/ReusableComponents/ProgressBar';
import BriefPage from './Components/BriefPage';
import reportWebVitals from './reportWebVitals';
import CatwikiLogo from "./Assests/CatwikiLogo.svg";
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     <Router>
     <header class="header">
      <nav class="nav">
      <Link to="/">
        <img src={CatwikiLogo} alt="Not Found" />
      </Link>
      </nav>
    </header>

    <Switch>
      <Route exact path="/"><App/></Route>
      <Route path="/progressbar"><Progressbar/></Route>
      <Route path="/brief"><BriefPage/></Route>


    </Switch>
    <div class="footer">
       <div> 
       <img src={CatwikiLogo} alt="Not found"/>
       <span class="c"><i class="uil uil-copyright"></i><span>created by <a href="https://github.com/jesintharnold" target="blank">Craxy_jesi</a>  - devChallenge.io 2021</span></span>
      </div>
    </div>


     </Router>




    
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
