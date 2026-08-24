import { createContext, useState, useEffect } from "react";

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

  const [details, setDetails] = useState({
    firstName: formDataCreateAccount.firstName,
    lastName: formDataCreateAccount.lastName,
    address: formDataCreateAccount.address,
    card: formDataCreateAccount.card,
    exp: formDataCreateAccount.expireDate,
  });
  useEffect(() => {
    setDetails((prev) => ({
      ...prev,
      firstName: formDataCreateAccount.firstName,
      lastName: formDataCreateAccount.lastName,
      address: formDataCreateAccount.address,
      card: formDataCreateAccount.card,
      exp: formDataCreateAccount.expireDate,
    }));
  }, [formDataCreateAccount]);

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
        details,
      }}
    >
      {children}
    </AuthenticatonContext.Provider>
  );
}
