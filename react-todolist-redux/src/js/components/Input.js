import React from 'react';
import PropTypes from 'prop-types';

const Input = ({  id, value,handleInput,placeholder,handleChange }) => (
    <input
        data-id={id}
        className={id}
        value={value}
        onKeyPress={handleInput}
        onChange={handleChange}
        placeholder={placeholder}
        required
    />
);
Input.propTypes = {
    value: PropTypes.any,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default Input;