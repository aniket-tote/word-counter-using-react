import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Second from './components/Second';

function App() {
  return (
    // <Router className='flex flex-col'>
    //   <Navbar/>

    // {/* <Routes>
    //   <Route path='/' element={ <Textform/>} />
    //     <Route path='/second' element={<Second/>}>
          
    //     </Route>
    // </Routes> */}

    //   <Footer/>
    // </Router>

    <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
      <Textform/>
      <Footer/>
    </div>
  );
}

export default App;



