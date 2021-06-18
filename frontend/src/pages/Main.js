import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api'
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main ({ match }) {
  const [users, setUsers]  = useState([]);

  useEffect(()=>{
    async function loarUsers(){
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      })

      setUsers(response.data);
    }

    loarUsers();
  },[match.params.id])

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: {
        user: match.params.id
      }, 
    })

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: {
        user: match.params.id
      }, 
    })

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <img src = {logo} alt="Timdev" />
      { users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src = {user.avatar} alt="" />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button className="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button> 
                <button className="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
      </ul>
      ): (
        <div className="empty"> Acabou :(</div>
      ) }
    </div>
  );
}