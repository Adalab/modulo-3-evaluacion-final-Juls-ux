import '../styles/App.scss';
import { Routes, Route } from 'react-router';
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
  
const findPeli= (name)=>{
  return peliculas.find(onePeli=>onePeli.name===name);
}


  const filteredMovies = peliculas.filter(pelicula =>
    pelicula.movie.toLowerCase().includes(filterMovie.toLowerCase()) &&
    (filteryear === '' || pelicula.year.toString() === filteryear)
  );
  

  //HOOK
  useEffect(() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then(response => response.json())
      .then(dataJson => setPeliculas(dataJson));
  }, []);

  return (
    <div>
     <Header></Header>

      <main>
        <Routes>
        <Route index element={<Home peliculas={filteredMovies} handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={years} />} />
        <Route path="detail/:name" element={<MovieSceneDetail peliculas={peliculas} />} />

        </Routes>

      </main>
    </div>
  )
}


export default App;
