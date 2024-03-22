import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const BASE_URL = process.env.REACT_APP_FIREBASE_URL;

function Home() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const { isLoading, error, request } = useHttp();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      const url = `${BASE_URL}users.json?orderBy="$key"&equalTo="${userId}"`;
      const responseData = await request({ url })

      setUser({
        first_name: responseData[userId].first_name,
        last_name: responseData[userId].last_name,
        email: responseData[userId].email
      })
    };

    fetchUser();
  }, [request])

  const loadingMessage = <h2>Cargando...</h2>

  const errorMessage = <h2>Error: {error}</h2>

  return (
    <Card className={styles.home}>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {!isLoading &&
        <>
          <h1>¡Bienvenido!</h1>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
        </>
      }
    </Card>
  );
}

export default Home;
