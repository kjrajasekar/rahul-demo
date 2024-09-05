import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Mains from './Mains';
import Home from './Home';

function Cards(props) {
  let mypath=props.paths
  const [cr, setcr] = useState("red");
  return (
    <div className="card" style={{width: "18rem",color:cr}}>
  <img src={mypath} className="card-img-top" alt="one"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>{setcr("blue")}}>{cr}</a>
  </div>
</div>
  );
}

export default Cards;
