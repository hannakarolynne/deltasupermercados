import { Route, Routes, BrowserRouter } from 'react-router-dom';
 import './App.css';
 import Home from './pages/Home/Home';
 import Catalog from "./pages/Catalog";
 import Details  from "../src/pages/details/details";
 import Comment from "../src/components/comment/comment";
 import Signup from "../src/pages/Signup/Signup";
 import Login from "../src/pages/Login/Login";
 import ProdCadastro from "../src/pages/ProdCadastro";

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
  <Route path="/register" element={<Signup/>}></Route>
  <Route path="/novoproduto" element={<ProdCadastro to="/catalogo/novoproduto" />} />
<Route path="/catalogo/novoproduto" element={<ProdCadastro />} />



</Routes>
      </BrowserRouter>
     </div>
   );
 }

 export default App;