import React from 'react'
import emailIcon from './../assets/email_icon.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="line"></div>
      <p className="footer_text" style={{fontWeight: 900}}>Ⓒ KAISEN WU</p>
      <div className="row_cont">
        <img src={emailIcon} alt="Email Icon" style={{width:18, marginRight:4}}/>
        <p className="footer_text">wks202007@gmail.com</p>
      </div>
    </div>
  )
}