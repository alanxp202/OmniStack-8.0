import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main ({ match }) {
  return (
    <div className="main-container">
      <img src = {logo} alt="Timdev" />
      <ul>

        <li>
          <img src="https://avatars.githubusercontent.com/u/2177042?v=4" alt="" />
          <footer>

            <strong>Raul FLP</strong>
            <p>Estudante de Sistemas de Informação. UFOP</p>

          </footer>
          <div className="buttons">

            <button className="button">
              <img src={dislike} alt="Dislike" />
            </button> 

            <button className="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars.githubusercontent.com/u/2177042?v=4" alt="" />
          <footer>

            <strong>Raul FLP</strong>
            <p>Estudante de Sistemas de Informação. UFOP</p>

          </footer>
          <div className="buttons">

            <button className="button">
              <img src={dislike} alt="Dislike" />
            </button> 

            <button className="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars.githubusercontent.com/u/2177042?v=4" alt="" />
          <footer>

            <strong>Raul FLP</strong>
            <p>Estudante de Sistemas de Informação. UFOP</p>

          </footer>
          <div className="buttons">

            <button className="button">
              <img src={dislike} alt="Dislike" />
            </button> 

            <button className="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars.githubusercontent.com/u/2177042?v=4" alt="" />
          <footer>

            <strong>Raul FLP</strong>
            <p>Estudante de Sistemas de Informação. UFOP</p>

          </footer>
          <div className="buttons">

            <button className="button">
              <img src={dislike} alt="Dislike" />
            </button> 

            <button className="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

      </ul>
    </div>
  );
}