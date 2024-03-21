import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const StyledAutocomplete = styled(Autocomplete)`
    background-color: #eeeeee;
    width: ${props => props.width};
`

export const StyledTextField = styled(TextField)`
    color: black;

    & .MuiAutocomplete-tag {
        border-radius: 8px;
        background-color: white;
        border: 1px solid lightgray; 
        & .MuiChip-deleteIcon {
            color: black};
            opacity: 0.8;
            &:hover {
                color: red;
            }
        }
    }; 

    & input {
        padding: 8.5px 14px;
        padding-right: 0 !important;
    }

    & .MuiOutlinedInput-root {
        padding-bottom: 4px;
        padding-top: 6px;

        &:hover fieldset {
            border: 1px solid lightgray;
        }
        
    
    }
`
