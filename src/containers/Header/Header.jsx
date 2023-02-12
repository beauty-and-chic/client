import React from 'react'
import { BiPhone, BiMailSend } from 'react-icons/bi'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

import './Header.css'
import contacts from '../../datas/contacts'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-logo">
        <div className='logo-text'>
          <h1>CHRISTELLE</h1>
          <h2>SHOPPING</h2>
        </div>
      </div>
      <nav>
        <div className='contact-info'>
          <BiPhone />
          <span>{ contacts.telephone }</span>
        </div>
        <a href={`mailto:${ contacts.mail }`} className='contact-info'>
          <BiMailSend />
          <span>{ contacts.mail }</span>
        </a>
        <a className='contact-info' href={ contacts.whatsapp } target="_blank" rel="noreferrer">
          <FaWhatsapp />
          <span>Business</span>
        </a>
        {
          contacts.socialNetworks.map(({ network, link, name }) => (
            <a className='contact-info' href={ link }>
              { network === 'facebook' ? <FaFacebook /> : <FaInstagram /> }
              <span>{ name }</span>
            </a> 
          ))
        }
      </nav>
    </div>
  )
}

export default Header