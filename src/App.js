import React from "react";
import "./img/wellcoming.png";
import {BrowserRouter as Router , Outlet, Route, Routes, link} from "react-router-dom";
import { Header,MonsterList,MonsterPage,MonsterListPopular} from "./Components";
import welcoming from "./img/wellcoming.png";
import {Badge} from "react-bootstrap";

function App() {

    return (
   <div>
       <Router>
           <Header/>
           <Routes>
               <Route path='monsters' element={<MonsterList />}/>
               <Route path='monster/:monsterID' element={<MonsterPage />}/>
           </Routes>
       </Router>
<Blog/>

   </div>
    );
}
const Blog = () => (
    <div>
        <Outlet/>
        <img className='img-welcome' src={welcoming}/>
    </div>
)
  export default App;
