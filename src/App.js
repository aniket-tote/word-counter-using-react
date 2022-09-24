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

// def sumNumberDivisible(m,n):
//     sum = 0
//     for i in range(m+1,n):
//         if i%3==0 and i%5==0:
//             sum+=i
//     return sum



