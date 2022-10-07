import React from "react";
import { Routes, Route } from "react-router-dom";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPage } from "./components";

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/singlecomponent' element={<SingleComponent/>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
