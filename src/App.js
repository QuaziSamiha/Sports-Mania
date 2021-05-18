import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (

    // <div>
    //   <LeagueDetail/>
    // </div>
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/leagueDetail/:leagueId'>
          <LeagueDetail/> 
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

