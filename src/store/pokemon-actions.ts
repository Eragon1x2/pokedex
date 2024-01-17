import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPokemons = createAsyncThunk('pokemon/all',
        async() => {
              
                
                const gg = await axios.get("https://pokeapi.co/api/v2/pokemon/").then(response => response.data).catch(error => error.message);
                const pokemonDetails = await Promise.all(
                        gg.results.map(async (pokemon: {url: string}) => {
                          const detailsResponse = await axios.get(pokemon.url);
                          return detailsResponse.data
                        })
                      );
                return {...gg,pokemonDetails}
            }
    )
export const getALlpokemonByPage = createAsyncThunk('pokemon/all_page',
            async(url:string) => {
                const gg = await axios.get(url).then(response => response.data).catch(error => error.message);
                const pokemonDetails = await Promise.all(
                        gg.results.map(async (pokemon: {url: string}) => {
                          const detailsResponse = await axios.get(pokemon.url);
                          return detailsResponse.data
                        })
                      );
                return {...gg,pokemonDetails}
            }
        )
export const getPokemonById = createAsyncThunk('pokemon/id',
            async(id: number) => {
              const gg = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.data).catch(error => error);
              // const pokemonAbilites = await Promise.all(
              //   gg.moves.map(async (item) => {
              //     const detailAbility = await axios.get(item.move.url);
              //     return detailAbility.data;
              //   })
              // )
              return {...gg};
              
              

})