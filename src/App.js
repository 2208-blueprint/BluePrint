import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateComponent, Footer, Redirect } from "./components";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPage } from "./components";
import { Navbar } from "./components";
import { DropDownItems } from "./components";
import { AllUsersPage } from "./components";
import UserPage from "./components/users/UserPage";


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/users' element={<AllUsersPage/>}></Route>
      <Route path='/users/:id' element={<UserPage />}></Route>
      <Route path='/components/:id' element={<SingleComponent/>}></Route>
      <Route path='/profile/create' element={<CreateComponent/>}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/redirect' element={<Redirect />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
