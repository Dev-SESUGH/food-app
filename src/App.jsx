import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeadCards from "./components/HeadCards";
import Food from "./components/Food";
import "./Button.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <BounceLoader color={"#F97316"} loading={loading} size={150} speedMultiplier={1} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <HeadCards />
          <Food />
          <Category />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
