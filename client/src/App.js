import './App.css';
import IndexPage from './pages/IndexPage/IndexPage';
import CursosPage from  './pages/CursosPage/CursosPage';
import CursosDetails from  './pages/CursosDetails/CursosDetails';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (

      <Router>
        <Routes>

        <Route path="/" element={<IndexPage />}/>
        <Route path="/cursos" element={<CursosPage />}/>
        <Route path="/cursosdetails/:cursos_id" element={<CursosDetails />}/>
                
      </Routes>
      </Router>
     
  
  );
}
