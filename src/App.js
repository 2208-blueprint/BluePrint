import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateComponent,
  Footer,
  Redirect,
  ProfilePage,
  NotFoundPage,
} from "./components";
import { SingleComponent } from "./components";
import { LoginPage } from "./components";
import { MainPage } from "./components";
import { Navbar } from "./components";
import { DropDownItems } from "./components";
import { SearchComponent } from "./components";
import { AllUsersPage } from "./components";
import { Navigation, SearchUsers } from "./components";
import { CategoryComponent } from "./components";
import { FrameworkComponent } from "./components";
import UserPage from "./components/users/UserPage";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <ToastContainer theme={"dark"} />
      {/* <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> */}
      <Navigation setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/users" element={<AllUsersPage />}></Route>
        <Route path="/users/search" element={<SearchUsers />}></Route>
        <Route path="/users/:id" element={<UserPage />}></Route>
        <Route path="/components/:id" element={<SingleComponent />}></Route>
        <Route
          path="/components/search/:keywords"
          element={<SearchComponent />}
        ></Route>
        <Route
          path="/components/category/:type"
          element={<CategoryComponent />}
        ></Route>
        <Route
          path="/components/framework/:framework"
          element={<FrameworkComponent />}
        ></Route>
        <Route path="/profile/create" element={<CreateComponent />}></Route>
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="/:badpath" element={<NotFoundPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
