import React from "react";
import Home from "./Components/Home";
import Book from "./Components/Book";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
    <div >
     
      <Router>
      <Navbar/>
                           
        <Route  exact path="/" component={Home}/>
        <Route  path="/book" component={Book}/>
      </Router>
    
    </div>
  );
}

export default App;