import { createContext, useMemo, useState, useEffect } from "react";
import { IAuthContext, IChildren, IUser } from "../interfaces";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    setTheme(user?.isDarkMode ? "dark" : "light");
  }, [user?.isDarkMode]);

  const memoValues = useMemo(
    () => ({
      user,
      isAuthenticated,
      theme,
    }),
    [user, isAuthenticated, theme],
  );

  return (
    <AuthContext.Provider
      value={{
        ...memoValues,
        theme,
        setUser,
        setIsAuthenticated,
        setTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
