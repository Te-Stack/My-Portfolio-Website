import React,{useState} from 'react'
import {ThemeProvider} from "styled-components"
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
import {lightTheme,darkTheme} from "./themes";




function App() {
  const {theme,setTheme} = useState("light")
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme:darkTheme}>
      <div>
        <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/about' exact component = {About} />
        <Route path='/projects' exact component = {Project} />
        <Route path='/contact' exact component = {Contact} />
        </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
