import React from 'react';
import languages from '../Languages';

export default function Select({ from, to, handleFromChange, handleToChange }) {
  return (
    <div className='container my-3' style={{ display: 'flex', justifyContent: 'space-between', width: '60vw', margin: 'auto' }}>
      <div>
        <select value={from} onChange={(e) => handleFromChange(e.target.value)} style={{borderRadius:'8px', padding:'0.3rem', border:"2px solid black"}}>
          <option value="">Select Source Language</option>
          {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <select value={to} onChange={(e) => handleToChange(e.target.value)} style={{borderRadius:'8px', padding:'0.3rem', border:"2px solid black"}} >
          <option value="">Select Target Language</option>
          {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}