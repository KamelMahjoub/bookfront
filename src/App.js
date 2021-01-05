import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components_template/Footer'
import Header from './components_template/Header'
import MainContent from './components_template/MainContent'
import SideBar from './components_template/SideBar'
export default function App() {
  return (
      <div>


        <Header/>


        <Router>       <SideBar/>  <MainContent/></Router>




        <Footer/>


      </div>
  )
}
