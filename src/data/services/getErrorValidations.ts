import { toast } from "react-toastify";
import { ZodError } from "zod";

export function getErrorValidation(err: Error) {
  console.log(err);
  if (err instanceof ZodError)
    if (err && err.errors.length > 0) {
      const { errors } = err;

      errors.forEach((error) => {
        toast.error(error.message);
      });
    }
}
