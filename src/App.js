//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from "./Weather";



function App() {
  return (
    <div className="App">


<div className="container">
        <Weather defaultCity="New York" />

         <footer>
          This project was coded by   
            Lucy Ajumi Ameh 
          and is{" "}
          <a
            href="https://github.com/Luluameh/WeatherAPP"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>





    </div>
  );
}

export default App;
