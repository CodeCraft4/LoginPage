import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const authContext = createContext();

export const authProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
