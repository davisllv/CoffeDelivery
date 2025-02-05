import { ReactNode } from "react";
import { LoadingContext } from "./LoaderBackdropContext";
import { LoaderBackdrop } from "../../../ui/layout/LoaderBackdrop/styles";
import { useLoaderBackdrop } from "../../hooks/useLoaderBackdrop";

interface ICoffeContextProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: ICoffeContextProviderProps) => {
  const { isLoading, setLoading } = useLoaderBackdrop();

  const value = {
    isLoading,
    setLoading: () => setLoading(),
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <LoaderBackdrop />}
    </LoadingContext.Provider>
  );
};
