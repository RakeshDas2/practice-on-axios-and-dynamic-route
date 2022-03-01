
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ListShow from './components/ListShow';
import DetailsShow from './components/DetailsShow';
import Home from './components/Home';


function App() {

 
 
  return (
    <Router>
      <div className="App">
     <Route path='/' render={(props)=><Home {...props}/>} />
    <Route path='/:showUrl' component={ListShow}/>
    <Route path='/:showUrl/:postId' component={DetailsShow} />
    </div>
    </Router>
  );
}

export default App;
