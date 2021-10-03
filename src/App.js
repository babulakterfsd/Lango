import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/Services">
            <Services></Services>
          </Route>
          <Route exact path="/Pricing">
            <Pricing></Pricing>
          </Route>
          <Route exact path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
