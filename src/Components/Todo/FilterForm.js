import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'


const FilterForm = ({ ACTIVE, COMPLETED, ALL, filter, handleFilterButtonClick }) => {
    return (
        <div>
            <PrimaryButton
                name="active"
                filter={filter}
                clicked={handleFilterButtonClick(ACTIVE)}
            />
            <PrimaryButton
                name="completed"
                filter={filter}
                clicked={handleFilterButtonClick(COMPLETED)}
            />
            <PrimaryButton
                name="all"
                filter={filter}
                clicked={handleFilterButtonClick(ALL)}
            />
        </div>
    )
}

export default FilterForm
