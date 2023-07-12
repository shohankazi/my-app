import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
    
<Navbar title = "TextUtils" aboutText = "About TextUtils"/>
<TextForm heading = "Enter the text to analyze below"/>
    <About/>
</>
  );
}

export default App;
