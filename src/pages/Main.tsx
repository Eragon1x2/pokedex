import {  useSelector } from 'react-redux';
import Pokemon_list from '../components/Pokemon/Pokemon_list.tsx';
import './Main.css';
interface Props {}
// const Preloader = () => {
//     return (
//       <div className="preloader-container">
//         <div className="spinner">  <img src={gif} alt="" style={{'width': '100vw', height: '100vh'}} /></div>
//       </div>
//     );
//   };
function Main(props: Props) {
    const {} = props
  const favorite_pokemons = useSelector((store:any) => store.pokemon.favorite_pokemons);
  // const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   },1000)
  // },[])
    return (    
        <>
 
    <div>
      <div><h1 className='main_title animate-charcter'>Favorite Pokemons</h1>
        {favorite_pokemons && <Pokemon_list pokemons={favorite_pokemons} favorite={true}/>}
      </div>
      {/* {pokemons && pokemons.map((item: {id:number, name:string, sprites: {back_default:string}}) => (
      <li key={item.id}>
        <img src={item.sprites.back_default} alt="" />
        <p>{item.name}</p>
        <button onClick={() => dispatch(pokemonReducer.setFavoritePokemon(item))}>Add to favorite</button>
      </li>))} */}
    </div>
    </>
    )
}

export default Main
