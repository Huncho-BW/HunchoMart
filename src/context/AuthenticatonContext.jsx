import { createContext, useState } from "react";

export const AuthenticatonContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatonContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatonContext.Provider>
  );
}
