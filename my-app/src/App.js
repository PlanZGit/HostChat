import { Routes, Route } from "react-router-dom";
import Lobby from "./components/Lobby/Lobby";
import Host from "./components/Host/Host";
import User from "./components/User/User";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <User>
      <Routes>
        <Route path="/" element={<Lobby />}>
          <Route path="/Host" element={<Host />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </User>
  );
}

export default App;
