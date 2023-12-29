"use client";

import {createContext, useContext, useEffect, useState} from "react";

const UserContext = createContext();

export function UserProvider({children}) {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch("/api/auth/user");
  //     if (response.status === 200) {
  //       const data = response.json();
  //       setUser(data);
  //     } else {
  //       setUser();
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
