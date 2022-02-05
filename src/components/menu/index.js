import React from 'react';
import './menu.css'
import { BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Menu = () => {
  return(
   <div className='menu'>
    <a href="https://youtube.com/c/sujeitoprogramado" className='social'>
     <BsYoutube color='#fff' size={24} />
    </a>

    <a href="https://instagram.com/sujeitoprogramado" className='social'>
     <BsInstagram color='#fff' size={24} />
    </a>

    <Link to="./" className='menu-item'>Meus Links</Link>
   </div>
   )
};

export default Menu;