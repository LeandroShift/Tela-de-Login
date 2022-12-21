import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    control: Control<IFormLogin, any>
    name: string;
    erroMessage?: string;
}
