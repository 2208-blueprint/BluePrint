import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPageSkeleton } from "./components"
=======
import { SingleComponent, LoginPage } from "./components";
>>>>>>> 88c61694c76d1b5e77dba4e2ea185d60c8f734f5

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPageSkeleton/>}></Route>
      <Route path='/singlecomponent' element={<SingleComponent/>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
