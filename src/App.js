import React from "react";
// import './App.css';
import {useState, useEffect} from "react";
import  Header from '../src/Components/Header/Header'
// import {BrowserRouter, Outlet, Route, Routes, link} from "react-router-dom";
import { MonsterList} from "./Components";
function App() {

    return (
   <div>
<Header />
<MonsterList/>

   </div>
    );
}

  export default App;
