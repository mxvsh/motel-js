import { SocketContext, socket } from "./context/Socket";
import { useContext, useEffect } from "react";
import { Provider as BumbagProvider } from "bumbag";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <BumbagProvider>
      <SocketContext.Provider value={socket}>
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </SocketContext.Provider>
    </BumbagProvider>
  );
}

export default App;
