import { Routes, Route, Outlet } from 'react-router-dom'

import Home from '../Routes/Home'
import Users from '../Routes/Users'
import User from '../Routes/Users/User'
import Posts from '../Routes/Posts'


import './style.scss'

const Main = () => (
  <main className="main">
      <h1>Information</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="users" element={<Users />}>
           <Route path=":userId" element={<User />} />
        </Route>
        <Route
           path="*"
           element={
           <main>
              <p>There's nothing here!</p>
           </main>
           }
        />
      </Routes>
  </main>
)

export default Main;

