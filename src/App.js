import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Textform/>
      <Footer/>
    </div>
  );
}

export default App;



