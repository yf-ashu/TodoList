import React from 'react';
import PropTypes from 'prop-types';

const Display = ({text,id,deleteItem,checked,changeChecked,checkid}) => {
    return (
        <div className="inputArea">
            <input type="checkbox" id={checkid}  onChange={changeChecked} checked={checked} />
            <label htmlFor={checkid}></label>
            <div className="inputArea__text" data-id={id} >{text}</div>
            <button data-id={id} onClick={deleteItem}>刪除</button>
        </div>
    );
};
Display.propTypes = {
    checkid:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    checked: PropTypes.bool.isRequired,
    changeChecked: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};
export default Display;