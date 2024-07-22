import { useEffect, useState } from 'react';
import Section from '../components/sectionOne'
import ListFilm from '../components/listFilm'
import Footer from "../components/footer";
import axios from 'axios';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.dev/api/films/').then((res) => {
      setFilms(res.data.results);
    });
  }, []);

  return (
    <div className='md:bg-[#041836] min-h-screen'>
      <Section films={films} />
      <ListFilm films={films} />
      <ListFilm films={films} />
      <Footer />
    </div>
  );
};

export default Home;