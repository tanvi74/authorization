import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Signup from './pages/register';
import Login from './pages/login';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
    <Router>
    
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/home" component={Home}/>
    
  </Router>
  </div>
  );
}

export default App;