import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import NowBuy from "./components/nowBuy/NowBuy";
import LikeCart from "./components/likeCart/LikeCart";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import NotFound from "./components/notFound/NotFound";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
import Apple from "./components/apple/Apple";

function App() {
  const [loading, setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
    <>
    {
      loading?<Loading/>:<div>
      <Toaster position="bottom-right"/>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/mehsullar/apple" element={<Apple />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/likecart" element={<LikeCart />} />
          <Route path="/nowbuy" element={<NowBuy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    }
    
      
    </>
  );
}

export default App;
