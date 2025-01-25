import { Route, Routes, BrowserRouter } from 'react-router-dom';
 import './App.css';
 import Home from './pages/Home/Home';
 import Catalog from "./pages/Catalog";
 import Details  from "../src/pages/details/details";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";


 function App() {
   return (
     <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/catalogo" element={<Catalog/>}></Route>
  <Route path="/detalhes" element={<Details/>}></Route>
  
  <Route path="/login" element={<Login/>}></Route>

  <Route path="/cadastrar" element={<Signup/>}></Route>
  

</Routes>
      </BrowserRouter>
     </div>
   );
 }

 export default App;