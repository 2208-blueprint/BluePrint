import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateComponent, Footer } from "./components";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPage } from "./components";
import { Navbar } from "./components";
import { DropDownItems } from "./components";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/components/:id' element={<SingleComponent/>}></Route>
      <Route path='/profile/create' element={<CreateComponent/>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
