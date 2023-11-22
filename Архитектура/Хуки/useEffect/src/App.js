import React, { useEffect } from 'react';

function App() {
  useEffect(() => {

    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
       
      });
  }, []);

  return <div>Hello, World!</div>;
}

export default App;