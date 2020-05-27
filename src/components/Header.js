import React from 'react'
import '../assets/css/Landing.css'

export default function Header() {
  return (
    <div style={{ fontFamily: 'Heebo', width: '90%', margin: 'auto', paddingTop: 25, display: 'flex', height: 80 }}>
      <div style={{ display: 'flex' }}>
        <p style={{ fontSize: 28, fontWeight: 500 }}>NextStep</p>
      </div>
      <div style={{ display: 'flex', marginLeft: 'auto', fontSize: 21, paddingTop: 15 }}>
        <p style={{ cursor: 'pointer' }}>About</p>
        <p style={{ cursor: 'pointer', marginLeft: 21 }}>Contact Us</p>
      </div>
    </div>
  )
}
