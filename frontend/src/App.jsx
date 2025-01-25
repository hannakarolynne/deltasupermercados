import { Route, Routes, BrowserRouter } from 'react-router-dom';
 import './App.css';
 import Home from './pages/Home/Home';
 import Catalog from "./pages/Catalog";
 import Details  from "../src/pages/details/details";
 import Comment from "../src/components/comment/comment";
 import Login from  "../src/pages/Login/Login"

 function App() {
   return (
     <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/catalogo" element={<Catalog/>} />
  <Route path="/detalhes" element={<Details/>}></Route>
  <Route path="/avaliacao" element={<Comment/>}></Route>
  <Route path="/login" element={<Login/>}></Route>

</Routes>
      </BrowserRouter>
     </div>
   );
 }

 export default App;