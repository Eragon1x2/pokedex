import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AppDispatch } from '../store';
import { getPokemonById } from '../store/pokemon-actions';
import { pokemonReducer } from '../store/pokemon';
import Loader from '../components/Loader/Loader';
import './PokemonInfo.css';
interface Props {}
type quizParams = {
    id: any,
}
function PokemonInfo(props: Props) {
    const {} = props
    const {id} = useParams<quizParams>();
    const dispatch = useDispatch<AppDispatch>();
    const {isLoading,pokemon} = useSelector((store: any) => store.pokemon);
    useEffect(() =>{
        dispatch(getPokemonById(id))
    },[])
    console.log(pokemon)
    return (
        <div className='pokemon-container'>
        {isLoading ? <Loader></Loader> : pokemon && <div className='pokemon-wrapper'>
            <img src={pokemon.sprites.front_default} alt="" />
        <h1>{pokemon.name}</h1>
        <p>Height: {pokemon.height} m</p>
        <p>Weight: {pokemon.weight} pounds</p>
        {/* <div>Moves
         <ul className='pokemon_moves'>  {pokemon.pokemonAbilites.map(item => (<li id={item.id}>
            <p>Name: {item.name}</p>
            <p>Power: {item.power}</p>
            <p>PP: {item.pp}</p>
            <p>target: {item.target.name}</p>
            <p>Type: {item.type.name}</p>
           </li>))}</ul>
        </div> */}
        <button onClick={() => dispatch(pokemonReducer.setFavoritePokemon(pokemon))}>Add to Favorite</button>
        </div>}
        </div>
    )
}

export default PokemonInfo
