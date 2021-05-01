import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import Contact from "./components/Contact"
import Project from "./components/Project"
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
      <Route path='/' exact component = {Home} />
      <Route path='/' exact component = {About} />
      <Route path='/' exact component = {Project} />
      <Route path='/' exact component = {Contact} />
      </Switch>
      </Router>
    </div>
  )
}

export default App
