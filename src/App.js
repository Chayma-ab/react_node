import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './users/Pages/Users';
import NewPlaces from './Places/Pages/NewPlaces';

const App = () => {
  return ( 
    <Router>
      <Switch>

      <Route path='/' exact>
        <Users />
      </Route>

      <Route path='/places/new' >
        <NewPlaces />
      </Route>

      
      <Redirect to="/" />




      </Switch>
    </Router>
  );
}

export default App;
