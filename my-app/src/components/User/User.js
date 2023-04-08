import React, { useState } from "react";

export const UserContext = React.createContext();

const User = ({ children }) => {
  const initialState = {
    username: "",
    room: "",
  };

  const [user, setUser] = useState(initialState);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;
