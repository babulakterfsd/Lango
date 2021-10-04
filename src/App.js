import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [services, setServices] = useState([]);

  //fetching data and setting into state
  useEffect(() => {
    fetch("./services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/Home">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/Services">
            <Services services={services}></Services>
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
