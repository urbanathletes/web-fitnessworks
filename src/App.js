import Router from './router'
import { BrowserRouter } from "react-router-dom";
import Footer from './components/layouts/footer';
// import Navbar from './components/layouts/navbar';

function App() {
  return (
    <div>
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <div className="w-full border-b-8 border-black pt-8 bg-blue-400 opacity-50"></div> */}
      <Router />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
