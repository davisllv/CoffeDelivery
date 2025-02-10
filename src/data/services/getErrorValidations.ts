/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { ZodError } from "zod";

export function getErrorValidation(err: ZodError<any>) {
  if (err && err.errors.length > 0) {
    const { errors } = err;

    errors.forEach((error) => {
      toast.error(error.message);
    });
  }
}
