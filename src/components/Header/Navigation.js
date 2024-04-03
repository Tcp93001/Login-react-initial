import { useContext } from "react";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import AuthContext from "../../context/AuthContext";

function Navigation() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  // Obtenemos UserId para mandarlo como query param en la url de Home
  const userId = localStorage.getItem('userId');

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Public</Link>
        </li>
        <li>
          <Link to="/gallery">Galería</Link>
        </li>
        <li>
          <Link to={`/home/${userId}`}>Home</Link>
        </li>

        {isLoggedIn ? (
            <li>
              <Button onClick={onLogout} color="secondary">
                Logout
              </Button>
            </li>
          ): (
              <li>
                <Link to="/login">Login</Link>
              </li>
          )
        }

        {/* {isLoggedIn && (
          <li>
            <a href="/">Usuarios</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Button onClick={onLogout} color="secondary">
              Salir
            </Button>
          </li>
        )} */}
      </ul>
    </nav>
  );
}

export default Navigation;
