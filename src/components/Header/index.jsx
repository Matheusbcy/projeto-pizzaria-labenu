import React from "react"
import logo from '../../assets/image17.png'
import { Div, Logo, Text, } from "./style"

export const Header = () => {
    return (
        <>
        <Div>
            <Logo src={logo}></Logo>
            <Text>Pizzaria Labenu</Text>
        </Div>
        </>
    )
}