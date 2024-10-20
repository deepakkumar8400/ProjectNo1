import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Title />
      <div className='container'>
        <Programs />
        <About />
        <Campus />
      </div>
    </>
  );
}

export default App;
