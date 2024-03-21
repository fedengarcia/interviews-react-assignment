import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { PAGINATION_OPTIONS } from '../../CONSTANTS';



const FilterControls = ({
    limitSearchParam,
    updateSearchParams
}) => {

    return (
        <div>
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
        </div>
    );
}

export default FilterControls;
