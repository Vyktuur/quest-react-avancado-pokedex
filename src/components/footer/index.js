import React, { useState, useContext } from "react";
import { Div, Section } from './styles'
import ScrollButton from "../scroll-button/index";
import { ThemeContext } from "../../contexts/theme-context"

export const Footer = () => {

    const { theme } = useContext(ThemeContext) 

    return (
        <Section>
                <ScrollButton/>          
            <Div>            
                <h3> Desenvolvido com PokéApi.co </h3>
                <h3> Criado por Victor Reis</h3>
            </Div>
        </Section>
        
    )
}

