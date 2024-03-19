import { createContext } from "react";
import { IThemeContext } from "./type.d";
import { customTheme } from "./Themes";

export default createContext<IThemeContext>({ theme:customTheme })
