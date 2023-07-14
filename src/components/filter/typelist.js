import React, { useEffect, useState, useContext } from "react";
import { Section, Div, DivSelect, PokemonWrapper, PokemonImage, PokemonName } from './styles'
import { getData, getTypesOfPokemons, getTypesOfPokemonsData, getPokemonList } from "../../services/pokedex-api";
import Select from "react-select";
import { ThemeContext } from "../../contexts/theme-context";

const PokemonTypeList = () => {

  const { theme } = useContext(ThemeContext);

  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const fetchPokemonsByType = async (type) => {
    try {
      setLoading(true);
      const data = await getTypesOfPokemonsData(type);
      const promise = data.pokemon.map(async (pokemon) => {
        return await getData(pokemon.pokemon.url);
      });
      const results = await Promise.all(promise);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("Fetch Pokemons by Type error: ", error);
    }
  };

  const fetchAllPokemons = async () => {
    try {
      setLoading(true);
      const pokemonList = await getPokemonList("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0");
      const promises = pokemonList.results.map(async (item) => {
        const pokemonUrl = item.url;
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonData = await pokemonResponse.json();
        return pokemonData;
      });
      const pokemonsData = await Promise.all(promises);
      setPokemons(pokemonsData);
      setLoading(false);
    } catch (error) {
      console.log("Fetch All Pokemons error: ", error);
    }
  };

  const fetchTypesOfPokemons = async () => {
    try {
      const data = await getTypesOfPokemons();
      const promise = data.results.map(async (type) => {
        return type.name;
      });
      const response = await Promise.all(promise);
      setTypes(response);
    } catch (error) {
      console.log("Fetch Types of Pokemons error: ", error);
    }
  };

  useEffect(() => {
    if (selectedType) {
      fetchPokemonsByType(selectedType);
    } 
    
    fetchTypesOfPokemons();
  }, [selectedType]);

  const changeSelectOptionHandler = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  return (
    <Section>
      <h3> Filtrar por tipo: </h3>
      <div>
        <DivSelect>
          <Select
            placeholder="All"
            onChange={changeSelectOptionHandler}
            options={types.map((type, index) => ({ id: index, value: type, label: type }))}
          />
        </DivSelect>
      </div>
      <Div>
        {loading ? (
          <h3> Carregando informações da PokeDex...</h3>
        ) : (
          pokemons.map((pokemon, index) => (
            <PokemonWrapper key={index} style={{ backgroundColor: theme.background }}>
              <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
              <PokemonName style={{ color: theme.color }}>{pokemon.name}</PokemonName>
            </PokemonWrapper>
          ))
        )}
      </Div>
    </Section>
  );
};

export default PokemonTypeList;
