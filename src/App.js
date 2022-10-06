import React from "react";
import { Routes, Route } from "react-router-dom";
import { SingleComponent, LoginPage } from "./components";

function App() {

  return (
    <>
    <Routes>
      <Route path='/singlecomponent' element={<SingleComponent/>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
