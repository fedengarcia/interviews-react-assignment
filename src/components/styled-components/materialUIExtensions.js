import { Autocomplete, TextField } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const StyledAutocomplete = styled(Autocomplete)`
    background-color: transparent;
    border: 1px solid ${props => props.theme.palette.primary.light} !important;
    border-radius: 8px;
    width: ${props => props.width};
`

export const StyledTextField = styled(TextField)`
    color: black;
    cursor: pointer;
    & input {
        padding: 8.5px 14px;
        padding-right: 0 !important;
    }

    & .MuiOutlinedInput-root {
        padding-bottom: 4px;
        padding-top: 6px;

        
    
    }
`


export const StyledSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    borderRadius: '8px',
    border: `1px solid ${theme.palette.primary.light}`,
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '100%',
    },
}));

export const StyledSearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    cursor: 'pointer'
   
    },
}));