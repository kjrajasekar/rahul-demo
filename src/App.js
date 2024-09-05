import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from './images/one.jpg'
import two from './images/two.jpg'
import three from './images/uiux.jpg'
import Mains from './Mains';
import Home from './Home';
import Service from './Service';

function App() {
  return (
    <div>
    <Mains  />
    <Home  />
    <p>sample text</p>
    <Service />
    </div>
  );
}

export default App;
