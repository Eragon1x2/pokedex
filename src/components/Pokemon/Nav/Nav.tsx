import './Nav.css';
import { Link } from 'react-router-dom';
import PokeApi from '../../../assets/pokeApi.png';
interface Props {}

function Nav(props: Props) {
    const {} = props

    return (
        <div className='nav'>
            <div className='nav_wrapper'>
               <a href="https://pokeapi.co/" target='_blank' className='pokeApi'><img width={100} src={PokeApi} alt="" /></a>
               <div>
               <Link to='/pokedex'>Home</Link>
                <Link to='pokemons'>Pokemons</Link>
               </div>
               
            </div>
        </div>
    )
}

export default Nav
