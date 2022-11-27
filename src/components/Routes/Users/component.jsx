import {Outlet, Link} from 'react-router-dom';
import  UseGetData  from '../../hooks/useGetData';

import './style.scss'

const Users = () => {

  const {data, error, loading} = UseGetData('https://jsonplaceholder.typicode.com/users');
  

  if(loading) {
    return 'Loading...'
  }

  if(error) {
    return (
      <div className='error'>
        <h1>404</h1>
        <p>Page not Found</p>
      </div>
    )
  }

  return (
    <>
    <h1>Users Information</h1>
    <ul className='cards'>
      {data.map(({id, name }) => (
        <li 
          className='card-item'
          key={id}>
        <Link to={`/users/${id}`}>
          <span>Name: </span>{name}
        </Link>
        </li>
      ))}
    </ul>
    <Outlet/>
    </>
  )
}

export default Users;