import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
    
<Navbar title = "TextUtils" aboutText = "About TextUtils"/>
<TextForm heading = "Enter the text to analyze below"/>
    </>
  );
}

export default App;
