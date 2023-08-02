import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./scenes/home/Home"
import ItemDetails from "./scenes/itemDetails/ItemDetails"
import Checkout from "./scenes/checkout/Checkout"
import Conformation from "./scenes/checkout/Conformation";
import Navbar from "./scenes/global/Navbar"
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer"
import Authentication from "./scenes/authentication/Authentication"
import {userData } from "./helper"
const {username} = userData()
function App() { 
  return (
    <div className="app">
        {username && (
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "item/:itemId" element = {<ItemDetails/>}/>
            <Route path = "checkout" element = {<Checkout/>}/>
            <Route path = "checkout/success" element = {<Conformation/>}/>
          </Routes>
          <CartMenu/>
          <Footer />
        </BrowserRouter>
        )}

        {!username && (
        <div>
          <Authentication />
          <Footer />
        </div>
        )}
    </div>
  );
}

export default App;
