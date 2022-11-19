import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

//hook para usar los valores del context
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("there is not auth provider");
  return context;
};
//hook para usar los valores del context
//function register
export function AuthProvider({ children }) {
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //function login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  return (
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider> //objeto a exportar
  );
}
