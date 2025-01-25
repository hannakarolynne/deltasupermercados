import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../../frontend/src/components/home/Home";
import Details from "../../frontend/src/components/products/details/details";
import Comments from "../../frontend/src/components/comment/Comments";

function App () {
    return(
        <Router>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="catalogo" element={<Catalogo/>}/>
                <Route path="detalhes" element={<Details/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="avaliacao" element={<Comments/>} />
            </Routes>
        </Router>
    )
}