import React, { createContext, useState } from 'react'
import { auth, onAuthStateChanged } from '../FireBase/firebase';


export const UserContext = createContext()
const Context = ({children}) => {

  const [isUser, setIsUser] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIsUser(true)
      sessionStorage.setItem('E-react-user_email', user.email);
    } else {
      setIsUser(false)
      sessionStorage.removeItem('E-react-user_email');
    }
  });

  return (
    <UserContext.Provider value={{isUser}}>{children}</UserContext.Provider>
  )
}

export default Context
