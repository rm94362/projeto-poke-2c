 import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg' 
import './Home.css'


const Home = () => {

    return (
        <div className="poke-flex">
        <img src={poke} />
       <img src={eevee} />
        <img src={poke} />
         <img src={poke} />
          <img src={poke} />
        </div>
    
    )
    }

    export default Home