import {useEffect,useState} from 'react';
import axios from 'axios';

const Pokedex = props => {
    const [pokemon, setPokemon] = useState(null);
    // const {pokemon, setPokemon} = props

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
          .then(response=>{
            // response.data.results needed to display all the names using the map function below
            setPokemon(response.data.results)
            console.log('useEffect...',pokemon)
        }).catch((error)=>{
            console.log("Error")
        })
    },[]);
      // console.log('From useEffect',pokemon)
      
    return (
    //   START here you have an error where the children cannot be read need more keys?
      <div>Axios Pokemon: 
        {/* ?. is optional chaining use this to log undefined instead of error if object is undefined or null */}
          {/* {pokemon.name} */}
          {
          pokemon?.map((item,index)=>{
            console.log('display',pokemon)
            return (<div key={index}>{index}.{item.name}</div>)
          })
          }
      </div>
  )
}

export default Pokedex;