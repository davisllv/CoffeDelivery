import { HtmlHTMLAttributes } from "react";

interface IButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const Button = ({ icon, ...rest }: IButtonProps) => {
  return (
    <button {...rest}>
      {icon}
      {rest.children}
    </button>
  );
};
