import React from 'react'
import { connect } from 'react-redux'


import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Item = ({ text, id, className, itemOnClick, itemOnRemove }) => {
    return (
        <div>
            <div
                className={className}
                onClick={() => itemOnClick(id)}
            >
                {text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => itemOnRemove(id)}
                    className="delete-item"
                />
                <TiEdit />
            </div>
        </div>

    )
}

const mapStateToProps = ({ todo }) => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)