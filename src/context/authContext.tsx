import { createContext, useMemo, useState } from "react";
import { IAuthContext, IChildren, IUser } from "../interfaces";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const memoValues = useMemo(
    () => ({
      user,
      isAuthenticated,
    }),
    [user, isAuthenticated],
  );

  return (
    <AuthContext.Provider
      value={{
        ...memoValues,
        setUser,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
