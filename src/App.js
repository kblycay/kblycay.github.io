import './App.css';
import './master.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Expertise from './components/expertise';
import Contact from './components/contact';
import Jobs from './components/jobs';
import Repos from './components/repos'
import Hobbies from './components/hobbies'
import References from './components/references'


const App = () => {

  const [User , SetUser] = useState([]);
  const [About , SetAbout ] = useState(false);

  const regex = /(<([^>]+)>)/ig

  useEffect(() => {

      if(User.length == 0){

        axios.get('https://api.github.com/users/kblycay').then(response => {
          SetUser(response.data);
        });

      }

      if(!About){
        axios.get('https://raw.githubusercontent.com/kblycay/kblycay/main/README.md').then(response => {
          SetAbout(response.data);
        });
      }

  });

  const print = () => {
      window.print();
  }

  console.log(User);

  return (
    <div className='container'>

      <div className="row">

        <div className="col-lg-3 p-0">
            <div className="card photo-card">
              <div className="card-body">
                  <img src={User.avatar_url} alt="" />
              </div>
            </div>
            <div className="card expertise-card">
              <div className="card-body">
                  <div className="card-title">UZMANLIKLARIM</div>

                  <Expertise/>

                  <Contact/>


              </div>
            </div>
        </div>
        
        <div className="col-lg-9 p-0">
            <div className="row">
              <div className="col-lg-12">

                <div className="card about-card">
                  <div className="card-body print-only">
                    <a href="" className="print-button" onClick={print}><FontAwesomeIcon icon={faPrint} /></a>
                    <a href="" className="language-button ">TR</a>
                    <a href="" className="language-button">EN</a>
                  </div>
                  <div className="card-body">
                    
                    <p className="name-surname-box">{ User.name ? User.name.split(' ')[0].toUpperCase() : '' } <span>{ User.name ? User.name.split(' ')[1].toUpperCase() : '' }</span></p>
                    <div className="content-card-title">HAKKIMDA</div>
                    <p className="content-about-box">{ About ? About.replace(regex, '') : '' }</p>
                  </div>
                </div>

                <div className="card white-card">
                  <div className="card-body">
                    <div className="content-card-title">İŞ DENEYİMLERİM</div>

                    <Jobs />

                  </div>
                </div>

                <div className="card white-card">
                  <div className="card-body">
                    <div className="content-card-title">REFERANSLARIM</div>

                    <References />

                  </div>
                </div>

                <div className="card white-card print-only">
                  <div className="card-body">
                    <div className="content-card-title">GİTHUB REPO</div>

                    <Repos />

                  </div>
                </div>

                <div className="card white-card">
                  <div className="card-body">
                    <div className="content-card-title">HOBİLERİM</div>

                    <Hobbies />

                  </div>
                </div>

              </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
