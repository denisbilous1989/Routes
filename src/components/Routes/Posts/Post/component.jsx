import './style.scss'


const Post =({ userId, title, body }) => {
      return (
      <li key={userId} className='card-item'>
        <div className='card'>
          <p><span>Title: </span>{title}</p>
          <p><span>Body: </span>{body}</p>
          <p><span>UserId: </span>{userId}</p>
        </div>
      </li>)
}

export default Post;