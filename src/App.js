import React from "react";
// import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter as Router , Outlet, Route, Routes, link} from "react-router-dom";
import { Header,MonsterList,MonsterPage} from "./Components";
function App() {

    return (
   <div>

       <Router>
           <Routes>
               <Route path='/' element={<Header/>}/>
               <Route path='/monsters' element={<MonsterList />}/>
               <Route path=':monsterID' element={<MonsterPage/>}/>
           </Routes>
       </Router>

       {/*<MonsterList />*/}
   </div>
    );
}

  export default App;
