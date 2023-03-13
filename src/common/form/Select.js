import React from 'react'
// import { Select } from '@chakra-ui/react'

const SelectField = ({ 
    label,
    id,
    onChange,
    options,
    value,
    placeholder,
    className,
    style,
    name,
    width,
    disabled,
    required,
    ...props
 }) => {
    return (
        <select 
            // placeholder={placeholder}
            onChange={onChange}
            id={id}
            required={required}
            style={style || {
                border: "1.89px solid #8692A6",
                borderRadius: "5px",
                margin: "8px",
                color: "#828282",
                width: "465px" || width,
                height: "40px"
            }}
            {...props}
        >
            {!props.noPlaceholder && <option value=''>{placeholder ?? '- SELECT -'}</option>}
        {options.map((optionValue, index) => (
            value === optionValue ? (
                <option key={index} value={value} disabled={disabled}>
                    {value}
                </option>
            ) : (
                <option key={index} value={optionValue} disabled={disabled}>
                    {optionValue}
                </option>
            )
        ))}
        </select>
    )
}

export default SelectField