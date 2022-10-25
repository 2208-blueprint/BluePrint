import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateComponent,
  Footer,
  Redirect,
  ProfilePage,
  NotFoundPage,
  FireBaseChat,
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
import UserPage from "./components/users/UserPage";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./components/firebase/AuthContext";
import { EditComponent } from "./components";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { currentUser } = useContext(AuthContext);
  const [showScroll, setShowScroll] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleScollVisible = () => {
      window.scrollY > 400 ? setShowScroll(true) : setShowScroll(false);
    };
    const handleResize = () => {
      if (width < 1300 && window.innerWidth > 1300) setWidth(window.innerWidth);
      if (width > 1300 && window.innerWidth < 1300) setWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScollVisible);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScollVisible);
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <ToastContainer
        theme={"dark"}
        position="top-center"
        autoClose={2000}
        transition={Flip}
      />
      {/* <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> */}
      <Navigation setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Routes>
        <Route
          path="/"
          element={<MainPage showScroll={showScroll} width={width} />}
        ></Route>
        <Route path="/users" element={<AllUsersPage />}></Route>
        <Route path="/users/search" element={<SearchUsers />}></Route>
        <Route path="/users/:id" element={<UserPage />}></Route>
        <Route path="/components/:id" element={<SingleComponent width={width}/>}></Route>
        <Route path="/components/:id/edit" element={<EditComponent width={width}/>}></Route>
        <Route
          path="/components/search/:keywords"
          element={<SearchComponent showScroll={showScroll} width={width} />}
        ></Route>
        <Route
          path="/components/category/:type"
          element={<CategoryComponent showScroll={showScroll} width={width} />}
        ></Route>

        <Route path="/profile/create" element={<CreateComponent width={width}/>}></Route>
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route path="/profile" element={<ProfilePage width={width} />}></Route>
        <Route path="/chat" element={<FireBaseChat />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="/:badpath" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
