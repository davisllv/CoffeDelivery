import { createContext, useContext } from "react";

interface ILoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const LoadingContext = createContext<ILoadingContextType>(
  {} as ILoadingContextType
);

export const useLoading = () => useContext(LoadingContext);
