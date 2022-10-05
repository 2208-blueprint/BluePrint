import React from "react";
import { Routes, Route } from "react-router-dom";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";

function App() {

  return (
    <>
    <Routes>
      <Route path='/singlecomponent' element={<SingleComponent/>}></Route>
    </Routes>
    </>
  );
}

export default App;
