import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from './images/one.jpg'
import two from './images/two.jpg'
import three from './images/uiux.jpg'
import Cards from './Cards';

function Home() {
  return (
    <div className="container text-center">
    <div className="row">
      <div className="col">
    <Cards paths={two}/>
      </div>
   <h2>git demo updation</h2>
      <div className="col">
      <Cards paths={one} />
      </div>
    </div>
  </div>
  );
}

export default Home;
