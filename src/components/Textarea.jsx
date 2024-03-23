import React from 'react';

export default function Textarea({ input, output, setInput }) {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div className="mb-3 my-4" style={{ width: '60vw', margin: 'auto' }}>
        <label htmlFor="inputTextarea" className="form-label">Input</label>
        <textarea
          className="form-control"
          id="inputTextarea"
          rows="8"
          value={input}
          onChange={handleChange}
          placeholder='Enter Your Text Here...'

          style={{border:"2px solid black"}}
        ></textarea>
      </div>
      <div className="mb-3 my-4" style={{ width: '60vw', margin: 'auto' }}>
        <label htmlFor="outputTextarea" className="form-label">Output</label>
        <textarea
          className="form-control"
          id="outputTextarea"
          rows="8"
          readOnly
          value={output}
          placeholder='Translation will appear here...'

          style={{border:"2px solid black"}}
        ></textarea>
      </div>
    </div>
  );
}