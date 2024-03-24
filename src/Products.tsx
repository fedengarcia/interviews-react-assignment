import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  CircularProgress,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { HeavyComponent } from './HeavyComponent.tsx';
import { useLocation, useSearchParams } from 'react-router-dom';
import FilterControls from './components/FilterControls/FilterControls.tsx';
import {StyledFlexCenter} from  './components/styled-components/containers'
import {StyledButton} from  './components/styled-components/materialUIExtensions'
import { Categories } from './Categories.tsx';

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  itemInCart: number;
  loading: boolean;
};

export type Cart = {
  items: Product[];
  totalPrice: number;
  totalItems: number;
}
export const Products = ({ onCartChange }: { onCartChange: (cart: Cart) => void }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingScroll, setLoadingScroll] = useState<boolean>(false);
  const [limitSelected, setLimitSelected] = useState('6')
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const location = useLocation();


  // Fetch products if searchParams is updated
  useEffect(() => {
    setLoading(true)
    let url = `/products${location.search}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setHasMore(data.hasMore)
      setProducts(data.products)})
    .finally(() => {
      setLoading(false)
    })
    ;
  }, [searchParams]);


  // Listener scroll beheavior to detect scrollBottom
  useEffect(() => {
     window.addEventListener('scroll', checkScrollBottom);

     return () => {
       window.removeEventListener('scroll', checkScrollBottom);
     };
  }, []);
  

  useEffect(() => {
    if(isScrollBottom && hasMore && loadingScroll){
        setLoadingScroll(true)
        let paramlimit = parseInt(searchParams.get('limit') || '6') 
        let newLimit = (paramlimit + parseInt(limitSelected)).toString()
        setLimitSelected(newLimit)
        
        let url = `/products${location.search}`
        url = url.replace(`${paramlimit}`,newLimit)
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => {
          setHasMore(data.hasMore)
          setProducts(data.products)})
        .finally(() => {
          setLoadingScroll(false)
          setLoading(false)
        })

      }
  }, [isScrollBottom]);
  

  /** Check if user scroll is bottom */
  const checkScrollBottom = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
    setIsScrollBottom(scrollTop + clientHeight >= scrollHeight);
  }
  


  function addToCart(productId: number, quantity: number) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          loading: true,
        };
      }
      return product;
    }));
    fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity }),
    }).then(async response => {
      if (response.ok) {
        const cart = await response.json();
        setProducts(products.map(product => {
          if (product.id === productId) {
            return {
              ...product,
              itemInCart: (product.itemInCart || 0) + quantity,
              loading: false,
            };
          }
          return product;
        }));
        onCartChange(cart);

      }
    });
  }



  return (
    <Box flex={1} display="flex" flexDirection="row">
        <Categories
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <Box flex={1}>
        <Box height="100%">
          <FilterControls
            setSearchParams={setSearchParams}
            searchParams={searchParams}
            setLimitSelected={setLimitSelected}
          />
          <Grid container spacing={2} p={2}>
            {loading 
              ? 
                <StyledFlexCenter>
                  <CircularProgress size={20} style={{marginRight: '10px'}}/>
                  Loading...
                </StyledFlexCenter>
              :
                <>
                  {products.length > 0 ? products.map(product => (
                    <Grid item xs={4} key={product.id}>
                      {/* Do not remove this */}
                      <HeavyComponent/>
                      <Card key={product.id} style={{ width: '100%' }}>
                        <CardMedia
                          component="img"
                          height="150"
                          image={product.imageUrl}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {product.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Typography variant="h6" component="div">
                            ${product.price}
                          </Typography>
                          <Box flexGrow={1}/>
                          <Box position="relative" display="flex" flexDirection="row" alignItems="center">
                            <Box position="absolute" left={0} right={0} top={0} bottom={0} textAlign="center">
                              {product.loading && <CircularProgress size={20}/>}
                            </Box>
                            <IconButton disabled={product.loading} aria-label="delete" size="small"
                                        onClick={() => addToCart(product.id, -1)}>
                              <RemoveIcon fontSize="small"/>
                            </IconButton>

                            <Typography variant="body1" component="div" mx={1}>
                              {product.itemInCart || 0}
                            </Typography>

                            <IconButton disabled={product.loading} aria-label="add" size="small"
                                        onClick={() => addToCart(product.id, 1)}>
                              <AddIcon fontSize="small"/>
                            </IconButton>
                          </Box>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                    :
                    <p style={{textAlign:'center', width: '100%'}}>
                      0 items found
                    </p>
                }
                </>
            }
            <StyledFlexCenter style={{margin: '2em'}}>
              {isScrollBottom && loadingScroll && <CircularProgress size={20}/>}
            </StyledFlexCenter>

          </Grid>
          </Box>
        </Box>
      </Box>
    
  );
};
