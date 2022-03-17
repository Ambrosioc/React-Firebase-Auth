import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import Home from "./pages/Home";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

function App() {
  return (
    <>
      <SignUpModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
      <div className="App">
        <h1 className="display-1">Bootstrap !</h1>
      </div>
    </>
  );
}

export default App;
