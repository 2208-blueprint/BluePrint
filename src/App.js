import React from "react";
import { Routes, Route } from "react-router-dom";
import { SingleComponent, CreateComponent } from "./components";
import { LoginPage } from "./components";

function App() {

  return (
    <>
    <Routes>
      <Route path='/components/:id' element={<SingleComponent/>}></Route>
      <Route path='/profile/create' element={<CreateComponent/>}></Route>
    </Routes>
    </>
  );
}

export default App;
