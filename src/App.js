import classes from './App.module.css';
import Navbar from './components/Navbar/Navigation';
import Movies from './components/Movies/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Navbar} exact/>
        <Route path="/movies" component={Movies} exact/>
      </Switch>
    </Router>

  )
}

export default App;