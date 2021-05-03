import { Link } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Link to='/nasaphoto' className='btn btn-outline-dark'>
        Visit the cosmos
      </Link>
    </div>
  );
};

export default Home;
