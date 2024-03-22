import { useEffect, useState, createContext,  } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
})

const BASE_URL = process.env.REACT_APP_FIREBASE_URL;

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isLoggedIn');
    if (isAuthenticated === '1') setIsLoggedIn(true)
  }, [])

  const fetchUser = async (email) => {
    const url = `${BASE_URL}users.json?orderBy="email"&equalTo="${email}"`;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Algo salio mal...')

    return response.json();
  };

  const loginHandler = async (email) => {
    try {
      const user = await fetchUser(email);
      const userId = Object.keys(user)[0];

      if (!userId) throw new Error("Correo es invalido");

      localStorage.setItem('isLoggedIn', '1');
      localStorage.setItem('userId', userId);
      setIsLoggedIn(true)
    } catch(error){
      console.log('Error: ', error.message )
    }
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )

};

export default AuthContext;