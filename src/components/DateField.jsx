
import React from "react";
import dayjs from 'dayjs';
import './styles/datefield.css';
import PropTypes from 'prop-types';

function DateField({ label, id, register, errors, validationRules }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
                {label}
            </label>
            <input
                type="date"
                id={id}
                {...register(id, validationRules)}
                style={{
                    padding: "8px",
                    width: "100%",
                    border: errors[id] ? "1px solid red" : "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            {errors[id] && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors[id].message}
                </p>
            )}
        </div>
    );
}

DateField.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    validationRules: PropTypes.object
};

DateField.defaultProps = {
    errors: {},
    validationRules: {}
};
export default DateField;
