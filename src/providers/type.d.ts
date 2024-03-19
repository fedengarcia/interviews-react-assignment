import { IClient } from "../../config"
import { ITheme } from "../../themes/types"


export interface ITheme {

}

export interface IThemeContext {
    theme:ITheme
}

export interface IThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}
