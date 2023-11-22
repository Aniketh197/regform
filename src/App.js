 import './App.css';
import React from 'react';
import Form from './form';
import List from './list';
import NavBar from './NavBar';
import { Route,Routes,BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;