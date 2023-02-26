import Image from "./components/images";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Mountain from "./components/mountain";
import Bird from "./components/bird";
import Beach from "./components/beach";
import Food from "./components/food";
import Search from "./components/search";
// import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="mountain" element={<Mountain/>}/>
            <Route path="bird" element={<Bird/>}/> 
            <Route path="food" element={<Food/>} />
            <Route path="beach" element={<Beach/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;

