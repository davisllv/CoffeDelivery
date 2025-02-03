import "styled-components";
import { defaultTheme } from "../../../ui/styles/themes/default";

type ThemeType = keyof typeof defaultTheme;

declare module "styled-components" {
  export type DefaultTheme = ThemeType;
}
