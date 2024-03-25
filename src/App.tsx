import { Cart, Products } from './Products.tsx';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppNavbar from './AppNavbar.tsx';
import { Categories } from './Categories.tsx';
import { useContext, useState } from 'react';
import { CartContext } from './providers/CartProvider/CartProvider.tsx';

function App() {

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <CssBaseline/>
      <AppNavbar />
      <Products/>
    </Box>
  );
}

export default App;
