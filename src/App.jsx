import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    
    return (
         <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/' element={<Footer/>}/> */}
        </Routes>
    );
}

export default App;
