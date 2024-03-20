import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AuthContext from "./context/AuthContext";

function App() {
  // Aqui usamos useContext() porque nos ayuda a eliminar props que no se necesitan más.
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Header />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
