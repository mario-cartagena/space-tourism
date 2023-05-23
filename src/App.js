import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Crew from './Components/Crew/Crew';
import Technology from './Components/Technology/Technology'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Destination /> */}
        <Routes>
          <Route path='home' element={<Home />} />
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
