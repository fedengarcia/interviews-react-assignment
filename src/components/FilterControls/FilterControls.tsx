import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { PAGINATION_OPTIONS } from '../../CONSTANTS';
import {StyledFilterControlsContainer, StyledFlexCenter} from '../styled-components/containers'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {StyledSearchIconWrapper, StyledSearch, StyledInputBase} from '../styled-components/materialUIExtensions'

const FilterControls = ({
    setSearchParams,
    searchParams
}) => {
    const [limitSearchParam, setLimitSearchParam] = useState(PAGINATION_OPTIONS[0])
    const [searchText, setSearchText] = useState('');

  // Set default filters
    useEffect(() => {
        if (!searchParams.has('limit')) searchParams.set('limit', PAGINATION_OPTIONS[0].value)
        setLimitSearchParam(PAGINATION_OPTIONS[0])
        setSearchParams(searchParams, { replace: true })
    }, [])

    // On key press(Intro) Search
    const handleKeyPressSearch = (event) => {
        if (event.key === 'Enter') {
            updateSearchParams('q', searchText);
            setSearchText('')
        }
    }

        // Update Search Params
    const updateSearchParams = (searchOption, value) => {
        if (searchOption === 'limit') {
            let val = PAGINATION_OPTIONS.find((option) => option.label === PAGINATION_OPTIONS[value].label)
            setLimitSearchParam(val)
            searchParams.set('limit', val.value)
        } else {
            searchParams.set(`${searchOption}`, value)
        }
        setSearchParams(searchParams, { replace: false })
    }

    return (
        <>
        <StyledFilterControlsContainer>
             <StyledSearch>
                <StyledSearchIconWrapper>
                <SearchIcon/>
                </StyledSearchIconWrapper>
                <StyledInputBase
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => handleKeyPressSearch(e)}
                    placeholder="Search…"
                    type='search'
                    inputProps={{ 'aria-label': 'search' }}
                />
            </StyledSearch>
            <Dropdown
                value={limitSearchParam}
                onChange={(e) => updateSearchParams('limit', e.target.dataset.optionIndex)}
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
