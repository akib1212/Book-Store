import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>

      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary border-solid border-2 border-sky-500">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default App;
