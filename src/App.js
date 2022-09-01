import logo from './logo.svg';
import './App.css';
import Appbar from './component/appbar/Appbar';
import Member from './component/member/Member';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/home/Home';
import Prediction from './component/prediction/Prediction';
import BetaPrediction from './component/BetaPrediction/BetaPrediction';
import Match from './component/prediction/Match';
import Result from './component/prediction/Result';
import Calculate from './component/prediction/Calculate';
import Confirm from './component/member/Confirm';
import Root from './component/root/Root';
import Login from './component/member/Login';
import RequireAuth from './component/RequireAuth';
import PeudoCase from './component/prediction/PeudoCase';
import PlayerIDTable from './component/prediction/PlayerIDTable';
import PlayerRanking from './component/DataTable/PlayerRanking';
import Data from './component/DataTable/Data'


export const ROLES = {
  "USER":200,
  "MEMBER_ROLE":300
}
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
          <Route exact path="/pseudo" element={<PeudoCase />} />
          <Route exact path="/prediction-trial" element={<BetaPrediction />} />
          <Route exact path="/data" element={<Data />} />
          <Route exact path="/confirm" element={<Confirm />} />



          {/* member */}
          <Route element={ <RequireAuth allowedRoles={[ ROLES.MEMBER_ROLE ]} />}>
            <Route exact path="/prediction" element={<Prediction />}/>
          </Route>
          <Route element={ <RequireAuth allowedRoles={[ ROLES.MEMBER_ROLE ]} />}>
            <Route exact path="/prediction/result" element={<Result />}/>
          </Route>
          <Route element={ <RequireAuth allowedRoles={[ ROLES.MEMBER_ROLE ]} />}>
            <Route exact path="/prediction/calculation" element={<Calculate />}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
