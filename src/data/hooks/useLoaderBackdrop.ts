import { useContext } from "react";
import { LoadingContext } from "../contexts/LoaderBackdrop/LoaderBackdropContext";

export const useLoaderBackdrop = () => {
  const { isLoading, setLoading } = useContext(LoadingContext);

  return { isLoading, setLoading };
};
