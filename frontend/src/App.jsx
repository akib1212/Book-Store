import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary border-solid border-2 border-sky-500">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
