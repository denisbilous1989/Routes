import { Link } from 'react-router-dom';

import './style.scss'

const Home = () => {
  return (
    <>
    <nav>
        <p>Click on the link to display <Link to="/users">Users</Link> information</p>
    </nav>
    </>
  )
}

export default Home;