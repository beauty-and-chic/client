import React from 'react'
import { FaKissWinkHeart, FaSearch } from 'react-icons/fa'
import { SiMarketo } from 'react-icons/si'

import './SideBar.css'

import greffes from '../../assets/categories/greffes.jpg'
import dressing from '../../assets/categories/dressing.jpg'
import accessories from '../../assets/categories/accessories.jpg'
import shoes from '../../assets/categories/shoes.jpg'

const handleSearch = (e) => {
  e.preventDefault();
}

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='greatings'>
        <h2>Salut ma puce</h2>
        <FaKissWinkHeart />
        <h2>!</h2>
      </div>

      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Entre un mot clé ici ;) !' />
        <button type="submit"><FaSearch /></button>
      </form>

      <div className="categories">
        <h3><SiMarketo />Catégories</h3>
        <div className="categories-list">
          <div className="category">
            <img src={ greffes } alt="" />
            <div>
              <p>GREFFES</p>
            </div>
          </div>
          <div className="category">
            <img src={ dressing } alt="" />
            <div>
              <p>DRESSING</p>
            </div>
          </div>
          <div className="category">
            <img src={ accessories } alt="" />
            <div>
              <p>ACCESSOIRES</p>
            </div>
          </div>
          <div className="category">
            <img src={ shoes } alt="" />
            <div>
              <p>CHAUSSURES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar