import { BrowserRouter, Route, Routes} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart"
import { Checkout } from "./components/Checkout";
import { Provider } from "./context/ItemContext";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={404} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
