import './App.css';
import './master.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

import Expertise from './components/expertise';
import Contact from './components/contact';
import Jobs from './components/jobs';


function App() {

  const print = () => {
      window.print();
  }

  return (
    <div className='container'>

      <div className="row">

        <div className="col-lg-3 p-0">
            <div className="card photo-card">
              <div className="card-body">

              </div>
            </div>
            <div className="card education-card">
              <div className="card-body">
                  <div className="card-title">EĞİTİM</div>
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
                  <div className="card-body">
                    
                    <a href="" class="print-button print-only" onClick={print}><FontAwesomeIcon icon={faPrint} /></a>
                    <p class="name-surname-box">KUBİLAY <span>ÇAY</span></p>
                    <div className="content-card-title">HAKKIMDA</div>
                    <p class="content-about-box">
                      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                    </p>
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
                  </div>
                </div>

                <div className="card white-card">
                  <div className="card-body">
                    <div className="content-card-title">HOBİLERİM</div>
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
