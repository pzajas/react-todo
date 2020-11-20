import React from 'react'
import ToggleButton from '../Buttons/ToggleButton'
import { COMPLETED, ACTIVE, ALL } from './Const'


const FilterForm = ({ value, onClick }) => {


    return (
        <div>
            <ToggleButton
                isActive={value === ACTIVE}
                onClick={onClick(ACTIVE)}
            >
                Active
            </ToggleButton>
            <ToggleButton
                isActive={value === COMPLETED}
                onClick={onClick(COMPLETED)}
            >
                Completed
            </ToggleButton>
            <ToggleButton
                isActive={value === ALL}
                onClick={onClick(ALL)}
            >
                All
            </ToggleButton>
        </div>
    )
}

export default FilterForm


