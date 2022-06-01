import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CallPage from "./components/CallPage/CallPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import './App.css'
import { Suspense } from "react";

const App = () => {
  return(
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/:id" element={<CallPage/>} />
          <Route exact path="/" element={<HomePage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
