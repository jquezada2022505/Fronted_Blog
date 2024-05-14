import React from 'react';

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
    readOnly
}) => {
    const handleValueChange = event => {
        onChangeHandler(event.target.value, field);
    };

    const handleInputBlur = event => {
        onBlurHandler(event.target.value, field);
    };

    return (
        <div className="input-container">
            <label htmlFor={field}>{label}</label>
            {textarea ? (
                <textarea
                    readOnly={readOnly}
                    id={field}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{ maxWidth: '600px' }}
                />
            ) : (
                <input
                    readOnly={readOnly}
                    id={field}
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                />
            )}
            {showErrorMessage && (
                <span className="error-message">{validationMessage}</span>
            )}
        </div>
    );
};

