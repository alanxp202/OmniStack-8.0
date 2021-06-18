import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';


export default function Login ({ history }){
  const [ username, setUsername ] = useState('');

  function handleSubmit (event){
    event.preventDefault();

    console.log(username);

    history.push('/main');
  }

  return (
      
    <div className="login-container">
      <form onSubmit = {handleSubmit}>
        <img src = {logo} alt = "Tinderv" />
        <input 
          placeholder = "Digite seu usuário no Github"
          value = {username}
          onChange = {event => setUsername(event.target.value)}
        />
        <button type = "submit">Enviar</button>
      </form>
    </div>
    

  );
}