import React from 'react';
import { StyledAutocomplete, StyledTextField } from '../styled-components/materialUIExtensions';



const Dropdown = ({
    options,
    label = '',
    labelOptions = 'title',
    multiple = true,
    width = '100%',
    bgColor = 'transparent',
    disableCloseOnSelect,
    renderOption,
    ...props
}) => {
    return (
        <StyledAutocomplete
            disablePortal
            id={label ? `autocomplete-dropdown-${label.toLowerCase()}` : 'autocomplete-dropdown'}
            getOptionLabel={(option) => option[labelOptions]}
            options={options}
            multiple={false}
            width={width}
            disableClearable={true}
            disableCloseOnSelect={true}
            bgcolor={bgColor}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    {renderOption ? renderOption(option, selected) : option[labelOptions]}
                </li>
            )}
            renderInput={(params) =>
                <>
                    <StyledTextField {...params} label={label}/>
                </>
            }
            {...props}
        />
    )

};

export default Dropdown;
