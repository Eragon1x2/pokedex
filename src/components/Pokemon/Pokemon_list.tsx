import './Pokemon.css';
import { pokemonReducer } from '../../store/pokemon';
import { useDispatch } from 'react-redux';
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import PokemonType from '../../models/pokemonType';

interface Props {
    pokemons: PokemonType[],
    favorite: boolean
}

function Pokemon_list(props: Props) {
    const { pokemons, favorite } = props;
    const dispatch = useDispatch();
    return (
      <div className='pokemon_list'>
        <ul>
       {pokemons && pokemons.map((item) => (
        <li className='pokemon_item' key={item.id}>
        {/* <Link to={`/pokedex/pokemons/${item.id}`}> */}
        <img src={item.sprites.other.showdown.front_default} alt="" />
        <p className='pokemon_name'>{item.name}</p>
       <div className='pokemon_stats'> <p>Height: {item.height}</p>
        <p>Weight: {item.weight}</p></div>
       {/* </Link> */}
       <button onClick={() => {
            if(favorite) {
                dispatch(pokemonReducer.deleteFavoritePokemon(item.id))
            }
            else {
                dispatch(pokemonReducer.setFavoritePokemon(item))
            }
            }}>{favorite ? <MdOutlineStar /> : <MdOutlineStarBorder />}</button>
      </li>
       ))}
        </ul>
      </div>  
    )
}

export default Pokemon_list
