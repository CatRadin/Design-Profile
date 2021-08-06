import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Designs from './components/Designs';
import Projects from './components/Projects'
import About from './components/About';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/designs" component={Designs} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>


  );
}

export default App;
