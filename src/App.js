import logo from './logo.svg';
import './App.css';
import Appbar from './component/appbar/Appbar';
import Member from './component/member/Member';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/home/Home';


function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/back.png)" ,  backgroundPosition: 'center',} } >
      <Router>
        <Appbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/member" element={<Member />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
