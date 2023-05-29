import React from 'react'
import logoImage from './../assets/logo_35.png';

export const Header = () => {
  return (
    <div className='main'>
        <img src={logoImage} alt="Logo"/>
        <p style={{textAlign:'center'}}>VirusTotal is a free service that analyzes files and URLs for viruses, worms, trojans and other kinds of malicious content.</p>
    </div>
  )
}
