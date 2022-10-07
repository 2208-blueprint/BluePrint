import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateComponent } from "./components";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPage } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/components/:id" element={<SingleComponent />}></Route>
        <Route path="/profile/create" element={<CreateComponent />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
