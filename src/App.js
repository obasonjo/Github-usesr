import logo from './logo.svg';
import './App.css';
import MyApp from './Components/Home/MyApp';
import About from './Components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MyApp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
