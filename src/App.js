import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Dataprovider } from './components/Contextdata';


function App() {
 return(
<>

  <div>
  <Dataprovider>
  
  <Router>
  
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/add" component={Add} />
  <Route path="/edit/:id" component={Edit} />
 
  
  </Switch>
  
  </Router>
  </Dataprovider>

    
  </div>
</>
 );
}

export default App;
