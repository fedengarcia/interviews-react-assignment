
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function AppNavbar({ quantity, price }: { quantity: number, price: number }) {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FreshCart Market
          </Typography>
          <Box display="flex" flexDirection="row" mx={2}>
            <Typography variant="h6" noWrap component="div" mr={2}>
              Total:
            </Typography>
            <Typography variant="h6" noWrap component="div">
              $ {(price || 0).toFixed(2)}
            </Typography>
          </Box>
          <Badge badgeContent={quantity || 0} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
