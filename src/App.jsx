import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Select from './components/Select';
import Textarea from './components/Textarea';
import Submit from './components/Submit';

function App() {
  const [mode, setMode] = useState('dark');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = () => {
    let url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.responseData.translatedText);
      })
      .catch((error) => {
        console.error('Error fetching translation:', error);
        // Handle error, show message to the user, etc.
      });
  };

  const handleFromChange = (selectedFrom) => {
    setFrom(selectedFrom);
  };

  const handleToChange = (selectedTo) => {
    setTo(selectedTo);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#003366";
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Navbar title="LingoLinker" mode={mode} toggleMode={toggleMode} />
      <div className="container" style={{ position: 'relative' }}>
        <div>
          <Select from={from} to={to} handleFromChange={handleFromChange} handleToChange={handleToChange} />
        </div>
        <div className='container my-3'>
          <Textarea input={input} setInput={setInput} output={output} />
        </div>
        <div>
          <Submit handleTranslate={translate} />
        </div>
      </div>
    </>
  );
}

export default App;