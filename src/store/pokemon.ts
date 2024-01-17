import { createSlice } from "@reduxjs/toolkit";
import { getALlpokemonByPage, getAllPokemons, getPokemonById} from "./pokemon-actions"
import { toast } from "react-toastify";
import PokemonType from "../models/pokemonType";
type pokemonSiceState = {
  pokemons: PokemonType[],
  pokemon: PokemonType | null,
  favorite_pokemons: any,
  next: any,
  previous: any,
  error: any,
  isLoading: boolean
  
  
}

const pokemon = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        pokemon: null,
        favorite_pokemons: JSON.parse(localStorage.getItem('favorite')!),
        next: null,
        previous: null,
        error: '',
        isLoading: false
    } as pokemonSiceState,
    // } as pokemonSiceState,
    reducers:  {
        setFavoritePokemon: (state,action) => {
           if(state.favorite_pokemons) {
            const existedItem = state.favorite_pokemons.find((item: {id:number}) => item.id === action.payload.id)
            if(!existedItem) {
                state.favorite_pokemons.push(action.payload);
                localStorage.setItem('favorite', JSON.stringify(state.favorite_pokemons));
                toast(`Pokemon ${action.payload.name} has added`);
            }
            else {
                toast(`Sorry but this pokemon already in your favorite pokemons`)
               return;
            }
        }
        else {
            state.favorite_pokemons = [action.payload];
            localStorage.setItem('favorite', JSON.stringify(state.favorite_pokemons));
        }
        },
        deleteFavoritePokemon: (state, action) => {
            if(state.favorite_pokemons) {
                state.favorite_pokemons = state.favorite_pokemons.filter((item: {id: number}) => item.id !== action.payload) 
                localStorage.setItem('favorite', JSON.stringify(state.favorite_pokemons))
                toast('You delete pokemon')
            }
            else return;
        }
    }, 
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllPokemons.pending,(state) => {
            // Add user to the state array
            state.isLoading = true;
          
          }),
        builder.addCase(getAllPokemons.fulfilled,(state, action) => {
          // Add user to the state array
          state.next = action.payload.next;
          state.previous = action.payload.previous;
          state.pokemons = action.payload.pokemonDetails;
          state.isLoading = false
        }),
        builder.addCase(getAllPokemons.rejected, (state, action) => {
            state.error = action;
            state.isLoading = false;
          }),
        builder.addCase(getALlpokemonByPage.pending,(state) => {
            state.isLoading = true;
        }),
        builder.addCase(getALlpokemonByPage.fulfilled,(state,action) => {
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            state.pokemons = action.payload.pokemonDetails;
            state.isLoading = false;
        }),
        builder.addCase(getALlpokemonByPage.rejected,(state,action) => {
            state.error = action;
            state.isLoading = false;
        }),
        builder.addCase(getPokemonById.pending,(state) => {
            state.isLoading = true;
        }),
        builder.addCase(getPokemonById.fulfilled,(state, action) => {
            state.pokemon = action.payload;
            state.isLoading = false;
            console.log(action.payload)
        }),
        builder.addCase(getPokemonById.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action;
        })
          
      },
      
    
   
})
export const pokemonReducer = pokemon.actions;
export default pokemon.reducer;