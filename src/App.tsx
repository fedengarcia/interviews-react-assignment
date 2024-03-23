import { Cart, Products } from './Products.tsx';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppNavbar from './AppNavbar.tsx';
import { Categories } from './Categories.tsx';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState<Cart>();


  function onCartChange(cart: Cart) {
    setCart(cart);
  }

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <CssBaseline/>
      <AppNavbar quantity={cart?.totalItems || 0} price={cart?.totalPrice || 0}/>
      <Box flex={1} display="flex" flexDirection="row">
        <Categories/>
        <Box flex={1}>
          <Products onCartChange={onCartChange}/>
        </Box>
      </Box>

    </Box>
  );
}

export default App;
