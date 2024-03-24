import React from 'react';
import { StyledAutocomplete, StyledTextField } from '../styled-components/materialUIExtensions';
import { PaginationOption } from '../../constants';

interface IDropdownProps {
    options: PaginationOption[]
    label: string
    labelOptions: string
    multiple: boolean
    width: string
    bgColor: string
    disableCloseOnSelect: boolean
}

const Dropdown = ({
    options,
    label = '',
    labelOptions = 'label',
    multiple = true,
    width = '100%',
    bgColor = 'transparent',
    disableCloseOnSelect,
    ...props
}: IDropdownProps) => {
    return (
        <StyledAutocomplete
            disablePortal
            id={label ? `autocomplete-dropdown-${label.toLowerCase()}` : 'autocomplete-dropdown'}
            getOptionLabel={(option: PaginationOption) => option[labelOptions]}
            options={options}
            multiple={false}
            width={width}
            disableClearable={true}
            disableCloseOnSelect={true}
            bgcolor={bgColor}
            renderOption={(props, option:PaginationOption) => (
                <li {...props}>
                    {option[labelOptions]}
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
