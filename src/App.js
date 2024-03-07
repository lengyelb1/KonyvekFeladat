import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import UjKonyv from './ujKonyv';
import SingleDisplay from './singleDisplay';
import Delete from './Delete';
import Modosit from './Modosit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path="ujkonyv" element={<UjKonyv/>} />
          <Route path="SingleDisplay/:id" element={<SingleDisplay/>} />
          <Route path="delete/:id" element={<Delete/>} />
          <Route path="modosit/:id" element={<Modosit/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
