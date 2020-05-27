import React from 'react'

export default function Footer() {
  return (
    <div style={{ width: '100vw', backgroundColor: '#000000' }}>
      <div style={{ width: '90%', margin: 'auto', display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <p style={{ fontSize: 28, fontWeight: 500, color: 'white' }}>NextStep</p>
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto', fontSize: 21, paddingTop: 15 }}>
          <p style={{ cursor: 'pointer', color: 'white' }}>About</p>
          <p style={{ cursor: 'pointer', color: 'white', marginLeft: 21 }}>Contact Us</p>
        </div>
      </div>
    </div>
  )
}
