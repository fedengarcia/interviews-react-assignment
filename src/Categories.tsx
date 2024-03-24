import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SearchParamsProps } from './constants';
import { useState } from 'react';

const drawerWidth = 180;

const categories = ['All','Fruit', 'Vegetables', 'Dairy', 'Bakery', 'Meat', 'Seafood', 'Snacks', 'Beverages'];

export const Categories = ({
  searchParams,
  setSearchParams
}: SearchParamsProps) => {
    const [categorySelected, setCategorySelected] = useState<string>('All');


     // Update Search Params
    const updateSearchParams = ( searchOption: string, value: string) => {        
        if(value === 'All'){
          searchParams.delete(`${searchOption}`)
        }else{
          searchParams.set(`${searchOption}`, value)
        }
        setSearchParams(searchParams)
        setCategorySelected(value)
    }

  
  return (
    <Box minWidth={drawerWidth} sx={{ borderRight: '1px solid grey' }}>
      <List>
        {categories.map((text) => (
          <ListItem key={text} disablePadding >
            <ListItemButton
              style={{backgroundColor: categorySelected === text ? 'lightskyblue' :'transparent'}}
              onClick={() => updateSearchParams('category', text)}
            
            >
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
