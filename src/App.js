import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Public from "./components/Public/Public";
import Gallery from "./components/Gallery/Gallery";
// import AuthContext from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  // Aqui usamos useContext() porque nos ayuda a eliminar props que no se necesitan más.
  // const { isLoggedIn } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Header />
      {/* <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main> */}
      <main>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route
            path="/home/:userId"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
