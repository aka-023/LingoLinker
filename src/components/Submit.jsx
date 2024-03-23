import React from 'react';

export default function Submit({ handleTranslate }) {
  return (
    <div className='my-4' style={{ position: 'absolute', right: '35vw' }}>
      <button className="btn btn-info" onClick={handleTranslate}>Click to Translate</button>
    </div>
  );
}
