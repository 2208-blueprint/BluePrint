import React from "react";
import { Routes, Route } from "react-router-dom";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPageSkeleton } from "./components"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPageSkeleton/>}></Route>
      <Route path='/singlecomponent' element={<SingleComponent/>}></Route>
    </Routes>
    </>
  );
}

export default App;
