import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from './images/one.jpg'
import two from './images/two.jpg'

import three from './images/uiux.jpg'

function Mains() {

  return (
    <div className="container text-center">
    <div className="row">
      <div className="col">
      <div className="card" style={{width: "18rem"}}>
  <img src={one} className="card-img-top" alt="one"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col">
      <div className="card" style={{width: "18rem"}}>
  <img src={two} className="card-img-top" alt="two"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col">
      <div className="card" style={{"width": "18rem"}}>
  <img src={three} className="card-img-top" alt="three"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    </div>
  </div>
  );
}

export default Mains;
