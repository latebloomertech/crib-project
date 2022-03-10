import React, {useState, useEffect} from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Pages/Home';
import Crib from "./components/Pages/Cribs";
import SingleCrib from "./components/Pages/SingleCrib"
import About from "./components/Pages/About"
import EmailSection from "./components/EmailSection";




function App() {

  const [cribs, setCribs]= useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/cribs")
    .then((response) =>response.json())
    .then(data =>setCribs(data))
  }, [])
 
  function handleAdd(newCrib){
    setCribs([...cribs, newCrib])
  }


  return (
  <>
  <Router>
    <Navbar />
    <Switch>
    
      {/* <Route path='/'> <Redirect to="/home" /> </Route>  */}
      {/* <Route path='/about'><About/></Route> */}
      <Route path='/cribs'><Crib cribs={cribs} handleAdd={handleAdd}/></Route>
      <Route path='/' exact><Home /> </Route>
      <Route path="/crib/:id"><SingleCrib cribs={cribs}/></Route>
      <Route path='/form'><EmailSection/></Route>
    
      </Switch>
     </Router>
    </>
  );
}

export default App;

  // {/* <Route path='/agent' exact><Agent /></Route>
  //     <Route path='/crib' exact><Crib /></Route> */}
