import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/NasaPhoto.css';

const API_KEY = process.env.REACT_APP_NASA_KEY;
const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const NasaPhoto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(NASA_API_URL);
      const { copyright, date, explanation, title, url } = res.data;
      setData({ copyright, date, explanation, title, url });
      return res;
    }
    fetchData();
  }, []);

  return (
    <>
      <Link to='/' className='return-home btn btn-dark'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-arrow-left-short'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
          />
        </svg>
        Return Home
      </Link>
      <div className='container'>
        <h1>{data.title}</h1>
        {data.copyright && (
          <p className='text-muted'>Copyright: {data.copyright}</p>
        )}
        <img className='img-fluid mb-3' src={data.url} alt={data.explanation} />
        <p>{data.explanation}</p>
      </div>
    </>
  );
};
export default NasaPhoto;
