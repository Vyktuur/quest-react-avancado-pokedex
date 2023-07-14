import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

export const Section = styled.section`
  color: #e0e1dd;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

export const DivSelect = styled.div`
  text-transform: capitalize;
  border-style: none;
  width: 140px;
  color: #000000; 
`;

export const PokemonWrapper = styled.div`
  width: 200px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 40px -7px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s ease-in-out;
  
  
  &:hover {
    transform: scale(1.05);
}
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const PokemonName = styled.span`
  text-align: center;
`;