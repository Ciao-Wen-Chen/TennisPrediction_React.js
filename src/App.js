import logo from './logo.svg';
import './App.css';
import Appbar from './component/appbar/Appbar';
import Member from './component/member/Member';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/home/Home';
import Prediction from './component/prediction/Prediction';
import Match from './component/prediction/Match';
import Result from './component/prediction/Result';
import Calculate from './component/prediction/Calculate';
import Confirm from './component/member/Confirm';
import Root from './component/root/Root';
import Login from './component/member/Login';
import RequireAuth from './component/RequireAuth'

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/back.png)" ,  backgroundPosition: 'center',} } >
      <Router>
        <Appbar />
        <Routes>
          {/* public */}
          <Route exact path="/welcome" element={<Root />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/member" element={<Member />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/member/confirm" element={<Confirm />} />

          {/* member */}
          <Route element={<RequireAuth/ >}>
            <Route exact path="/prediction" element={<Prediction />}/>
            <Route exact path="/prediction/result" element={<Result />}/>
            <Route exact path="/prediction/calculation" element={<Calculate />}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
