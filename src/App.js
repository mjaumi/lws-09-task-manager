import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNewTask from './pages/AddNewTask';
import EditTask from './pages/EditTask';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-new-task' element={<AddNewTask />} />
        <Route path='/edit-task/:taskId' element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
