/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import { defaultTheme } from "../../../ui/styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
