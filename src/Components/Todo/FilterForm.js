import React from 'react'
import ToggleButton from '../Buttons/ToggleButton'
import { COMPLETED, ACTIVE, ALL } from './Const'
import { connect } from 'react-redux'
import { setFilter } from "../../Store/Todo/actions";

const FilterForm = ({ filter, setFilter }) => {
    return (
        <div>
            <ToggleButton
                isActive={filter === ACTIVE}
                onClick={() => setFilter(ACTIVE)}
            >
                Active
            </ToggleButton>
            <ToggleButton
                isActive={filter === COMPLETED}
                onClick={() => setFilter(COMPLETED)}
            >
                Completed
            </ToggleButton>
            <ToggleButton
                isActive={filter === ALL}
                onClick={() => setFilter(ALL)}
            >
                All
            </ToggleButton>
        </div>
    )
}

const mapStateToProps = ({ todo }) => ({
    filter: todo.filter

});

const mapDispatchToProps = {
    // setFilterAction: setFilter,
    setFilter

};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)


