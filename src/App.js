
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Series from "./components/series/Series"
import Movies from "./components/movies/Movies"

const App =()=>
{
  const history = useHistory();

  return(
  <>
  <Header name = 'Titles'/>
    <div className='content'>
      <p>
        <button>Series</button>             <button>Movies</button></p>
    </div>
  <Footer />
    <Router>
    <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
        </Switch>
    </Router>
  </>
  ) 
}


export default App;
