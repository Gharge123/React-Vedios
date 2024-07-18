import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm/TextForm';


// textutils = peace of text will be show and remove the space and capitilize the text

function App() { //first write a fuction and then retuns and jsx , inner body will be jsx 

  return ( //class will be replaced to classname, in javascript toggle case apply for example htmlFor
  <>
 
<Navbar title="TextUtils" aboutTitle="About Us"/>
<div className="container my-3">
<TextForm heading="Enter The Text To Analys Below"/>
<About/>
</div>


  
</>

  );

}


export default App;

// <Navbar/> if dot set value in navbar then show me as values as i set in props
