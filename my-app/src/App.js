import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <div className='container'>
        <Routes>
          <Route>

          </Route>
        </Routes>
      </div>
    </Nav>
    </BrowserRouter>
  );
}

export default App;
