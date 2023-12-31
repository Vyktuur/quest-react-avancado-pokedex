import React, { useContext } from "react"
import { Header } from "../components/header/header"
import { PokemonList } from '../components/pokemon-list/pokemon-list'
import { ThemeContext } from "../contexts/theme-context"
import styled from 'styled-components'
import PokemonTypeDropdown from "../components/filter/typelist"
import { Footer } from "../components/footer";

export const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container style={{ color: theme.color, backgroundImage: theme.image }}>
            <Header />
            <PokemonList />
            <PokemonTypeDropdown />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;