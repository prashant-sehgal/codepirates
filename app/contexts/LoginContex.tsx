'use client';
import { createContext, useCallback, useContext, useState } from 'react';

interface TypeLoginContext {
  isFormActive: boolean;
  toggleForm: () => void;
}

const LoginContext = createContext<TypeLoginContext | undefined>(undefined);

export default function LoginProvider(
  props: Readonly<{ children: React.ReactNode }>
) {
  const [isFormActive, setIsFormActive] = useState(false);

  const toggleForm = useCallback(
    function () {
      setIsFormActive((current) => !current);
    },
    [setIsFormActive]
  );

  return (
    <LoginContext.Provider value={{ isFormActive, toggleForm }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context)
    throw new Error(
      `[LoginContext] useLogin() must be used within a <LoginProvider>. Ensure that your component is wrapped in <LoginProvider> in the component tree.`
    );

  return context;
}
