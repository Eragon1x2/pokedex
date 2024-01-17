import {useEffect} from 'react'
import {getAllPokemons, getALlpokemonByPage} from '../store/pokemon-actions.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/index.ts';
import Pokemon_list from '../components/Pokemon/Pokemon_list';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import './GetPokemons.css';
import Loader from '../components/Loader/Loader.tsx';

interface Props {}

function GetPokemons(props: Props) {
    const onScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    const {} = props
    const pokemons = useSelector((store:any) => store.pokemon.pokemons);
    const next = useSelector((store: any) => store.pokemon.next);
    const previos = useSelector((store: any) => store.pokemon.previous);
    const isLoading = useSelector((store: any) => store.pokemon.isLoading);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getAllPokemons());
      },[])
    return (
        <div className='getPokemons'> <h1 className='getPokemons_title'>ALL POKEMONS</h1>
        {isLoading ? <Loader></Loader> : <Pokemon_list pokemons={pokemons} favorite={false}></Pokemon_list>}
        <div className='controls'><button onClick={() => {dispatch(getALlpokemonByPage(previos)); onScroll()}}><FaArrowLeft></FaArrowLeft></button>
        <button onClick={() => {dispatch(getALlpokemonByPage(next));onScroll()}}><FaArrowRight></FaArrowRight></button></div>
        </div>
    )
}

export default GetPokemons
