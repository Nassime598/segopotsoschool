import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Schools4Sa - Find Schools in South Africa";
  }, []);

  return <Home />;
}

export default App;