import { ReactNode, useState } from "react";
import { LoadingContext } from "./LoaderBackdropContext";
import { LoaderBackdrop } from "../../../ui/layout/LoaderBackdrop/styles";

interface ICoffeContextProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: ICoffeContextProviderProps) => {
  const [isLoading, setLoading] = useState(false);

  const value = {
    isLoading,
    setLoading: (loading: boolean) => {
      console.log("Setting loading to: ", loading);
      setLoading(loading);
    },
  };
  console.log(isLoading);
  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <LoaderBackdrop />}
    </LoadingContext.Provider>
  );
};
