
import './App.css';
import Header from './Header/Header';
import Index from './Index/Index';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/contactus" element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
