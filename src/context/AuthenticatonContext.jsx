import { createContext, useState } from "react";

export const AuthenticatonContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormDate] = useState({
    email: "",
    password: "",
  });

  const [formDataCreateAccount, setFormDataCreateAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    comfirmPassword: "",
    address: "",
    card: "",
    expireDate: "",
    cvv: "",
  });

  console.log("log user", user);

  return (
    <AuthenticatonContext.Provider
      value={{
        user,
        setUser,
        formDataCreateAccount,
        setFormDataCreateAccount,
        accounts,
        setAccounts,
        formData,
        setFormDate,
      }}
    >
      {children}
    </AuthenticatonContext.Provider>
  );
}
