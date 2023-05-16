import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Contact from './components/Contact';
import Results from './components/Results';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Results' element={<Results />} />
      </Routes>
    </div>
  );
}

export default App
