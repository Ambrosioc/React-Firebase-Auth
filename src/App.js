import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SignUpModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <div className="App">
        <h1 className="display-1">Bootstrap !</h1>
      </div>
    </>
  );
}

export default App;
