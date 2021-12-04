import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Page404} from "./components/Page404/Page404";
import {EnterNewPass} from "./components/Auth/Recovery/EnterNewPass/EnterNewPass";
import {CheckEmail} from "./components/Auth/Recovery/CheckEmail/CheckEmail";
import {CreateNewPass} from "./components/Auth/Recovery/CreateNewPassword/CreateNewPass";
import {Profile} from "./components/Profile/Profile";
import {Login} from "./components/Auth/Login/Login";
import {Recovery} from "./components/Auth/Recovery/Recovery";
import {Reg} from "./components/Auth/Reg/Reg";
import {Cards} from "./components/Cards/Cards";
import {Packs} from "./components/Packs/Packs";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/registration'} element={<Reg/>}/>
        <Route path={'/recoverypassword'} element={<Recovery/>}/>
        <Route path={'/enterpassword'} element={<EnterNewPass/>}/>
        <Route path={'/createnewpassword/:token'} element={<CreateNewPass/>}/>
        <Route path={'/checkemail'} element={<CheckEmail/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/*'} element={<Page404/>}/>
        <Route path={'/packs'} element={<Packs/>}/>
        <Route path={'/packs/:id/cards'} element={<Cards/>}/>
      </Routes>
    </div>
  );
};

export default App;