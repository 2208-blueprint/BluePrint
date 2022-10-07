import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateComponent } from "./components";
import { SingleComponent, LoginPage } from "./components";
import Redirect from './components/Redirect'

function App() {

  return (
    <>
    <Routes>
      <Route path='/components/:id' element={<SingleComponent/>}></Route>
      <Route path='/profile/create' element={<CreateComponent/>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/redirect' element={<Redirect />}></Route>
    </Routes>
    </>
  );
}

export default App;
