import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
//import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import CreateDogs from "./pages/CreateDogs/CreateDog";
import DetailDogs from "./pages/DetailDogs/DetailDogs";
import NotFound from "./components/NotFound404/notFound";
import About from "./pages/About/About";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {/* {pathname !== "/" ? <NavBar /> : null} */}
      {pathname !== "/" && <NavBar />}

      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/create" component={CreateDogs}></Route>
        <Route exact path="/detail/:id" component={DetailDogs}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route path="/" component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
