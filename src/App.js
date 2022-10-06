import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background p-0 m-0 min-h-screen">
        <p className='text-5xl font-bold text-center font-helvetica pt-2 lg:pt-5 text-primary'>A Meme Generator</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
