import '../styles/App.scss';
import { Routes, Route,  } from 'react-router';
import logoOwen from '../images/logo-owen.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router'
import Home from './pages/home';
import PeliculasList from './peliculas/peliculasList';
import Header from './Header';
import Filter from './Filter';
import MovieSceneDetail from './pages/MovieSceneDetail';


function App() {

  //VARIABLES DE ESTADO

  const [peliculas, setPeliculas] = useState( [] );
  const [filterMovie, setFilterMovie] =useState('');
  const [filteryear, setFilteryear]= useState('');
  
  const years = [...new Set(peliculas.map(pelicula => pelicula.year.toString()))];

  //SECCION EVENTOS

  const handleFilterMovie = (ev) => {
    ev.preventDefault();
    setFilterMovie(ev.target.value);
  };
  
  const handleFilterYear = (ev) => {
    ev.preventDefault();
    setFilteryear(ev.target.value);
  };
  
  const handleFilterRemove = (ev) =>{
    
    ev.preventDefault();

    setFilterMovie('');
    setFilteryear('');
    
  }
  
const findPeli= (movie, timestamp)=>{
  return peliculas.find(onePeli => onePeli.movie === movie && onePeli.timestamp === timestamp);
}



const filteredMovies = peliculas.filter(pelicula =>
  pelicula.movie.toLowerCase().includes(filterMovie.toLowerCase()) &&
  (filteryear === '' || pelicula.year.toString() === filteryear) 
);

//HOOK
useEffect(() => {
    fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?results=50${filterMovie,filteryear}`)
      .then(response => response.json())
      .then(dataJson => {
        setPeliculas(dataJson);
  }); 
},[filterMovie, filteryear]);

  return (
    <div>
     <Header></Header>

      <main>
        <Routes>
        <Route index element={<Home peliculas={filteredMovies} handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={years} handleFilterRemove={handleFilterRemove} filterMovie={filterMovie} filteryear={filteryear}/>} />
        <Route path="detail/:movie/:timestamp" element={<MovieSceneDetail findPeli={findPeli} />} />

        </Routes>

      </main>
    </div>
  )
}


export default App;
