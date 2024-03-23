import React, { ChangeEvent, useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { PAGINATION_OPTIONS } from '../../CONSTANTS';
import {StyledFilterControlsContainer, StyledFlexCenter} from '../styled-components/containers'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {StyledSearchIconWrapper, StyledSearch, StyledInputBase} from '../styled-components/materialUIExtensions'
import { PaginationOption } from '../../constants';

type FilterControlProps = { 
    setSearchParams: (params: URLSearchParams) => void;
    searchParams: URLSearchParams;
}

const FilterControls = ({
    setSearchParams,
    searchParams
}: FilterControlProps) => {
    const [limitSearchParam, setLimitSearchParam] = useState(PAGINATION_OPTIONS[0])
    const [searchText, setSearchText] = useState('');

  // Set limit default all
    useEffect(() => {
        if (!searchParams.has('limit')) searchParams.set('limit', PAGINATION_OPTIONS[0].value)
        setLimitSearchParam(PAGINATION_OPTIONS[0])
        setSearchParams(searchParams)
    }, [])

    // Search product
    useEffect(() => {
      updateSearchParams('q', searchText);
    }, [searchText]);
    

        // Update Search Params
    const updateSearchParams = ( searchOption: string, value: string) => {
        if (searchOption === 'limit') {
            let val = PAGINATION_OPTIONS.find((option: PaginationOption) => option.label === PAGINATION_OPTIONS[parseInt(value)].label)
            if(val){
                setLimitSearchParam(val)
                searchParams.set('limit', val.value)
            }
        } else {
            searchParams.set(`${searchOption}`, value)
        }
        setSearchParams(searchParams)
    }

    return (
        <>
        <StyledFilterControlsContainer>
             <StyledSearch>
                <StyledSearchIconWrapper>
                <SearchIcon/>
                </StyledSearchIconWrapper>
                <StyledInputBase
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                    placeholder="Search…"
                    type='search'
                    inputProps={{ 'aria-label': 'search' }}
                />
            </StyledSearch>
            <Dropdown
                value={limitSearchParam}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateSearchParams('limit', e.target.dataset.optionIndex || '')}
                options={PAGINATION_OPTIONS}
                labelOptions='label'
                label='Per page'
                bgColor='100'
                width='150px'
                size="small"
                style={{ marginLeft: '0.5em'}}
            />
        </StyledFilterControlsContainer>
        {searchParams.get('q') !== '' &&
        <StyledFlexCenter style={{justifyContent: 'flex-start', padding: '0 1em'}}>
            {`Search: ${searchParams.get('q')}`}
            <ClearIcon
                style={{fontSize: '1.2em', border: '2px solid lightblue', borderRadius:'50%', marginLeft: '8px', cursor:'pointer'}}
                titleAccess='Clear search'
                onClick={() => {
                    setSearchText('')
                    updateSearchParams('q','')}
                }
            />
        </StyledFlexCenter>}
        </>
    );
}

export default FilterControls;
