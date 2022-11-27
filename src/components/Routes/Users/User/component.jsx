import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useGetData from '../../../hooks/useGetData';

import './style.scss';

const User = () => {
  const {userId} = useParams();

  const { data, error, loading } = useGetData(`https://jsonplaceholder.typicode.com/users/${userId}`, [userId]);
  const { name, username, phone, email, website} = data

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
    <div className='details'>
      <p>Name: <span>{name}</span></p>
      <p>User Name: <span>{username}</span></p>
      <p>Phone: <span>{phone}</span></p>
      <p>Email: <span>{phone}</span></p>
      <p>Website: <span>{website}</span></p>
      <Link to="/users">Close</Link>
    </div>
  )
}





export default User;
