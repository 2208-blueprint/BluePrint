import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateComponent, Footer, Redirect } from "./components";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPage } from "./components";
import { Navbar } from "./components";
import { DropDownItems } from "./components";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
    <SkeletonTheme baseColor="#bcbcbc" highlightColor="#ebebeb">
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/components/:id' element={<SingleComponent/>}></Route>
        <Route path='/profile/create' element={<CreateComponent/>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/redirect' element={<Redirect />}></Route>
      </Routes>
    <Footer/>
    </SkeletonTheme>
    </>
  );
}

export default App;
