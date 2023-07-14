import React, { useContext } from "react";
import { Button } from "./style";
import { ThemeContext } from "../../../contexts/theme-context";


export const ButtonDefault = (props) => {    

    const { theme } = useContext(ThemeContext)

    return ( 
        <Button {...props}></Button>
    )
}


