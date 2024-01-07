"use client";

import {createContext, useContext, useEffect, useState} from "react";

const UserContext = createContext();

export function UserProvider({children}) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  async function fetchUser() {
    setLoadingUser(true);
    const res = await fetch("/api/users/me");
    if (res.status === 200) {
      const currUser = await res.json();
      setUser(currUser);
    } else {
      setUser();
    }
    setLoadingUser(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{user, fetchUser, loadingUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
