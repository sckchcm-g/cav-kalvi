import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homing from './components/Homing'
import Aboutus from './components/Aboutus'
import './App.css'
class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Homing/>}  />
        <Route path='/Aboutus' element={<Aboutus/>}/>
      </Routes>
      </> 
    )
  }
}

export default App

