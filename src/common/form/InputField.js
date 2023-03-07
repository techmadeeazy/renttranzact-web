import { InputGroup, InputRightElement, InputLeftElement, Input} from '@chakra-ui/react'
import React from 'react'

const InputField = ({
    label,
    id,
    width,
    onChange,
    onClick,
    value = '',
    placeholder,
    className,
    type,
    leftElement,
    rightElement,
    required,
    style,
    ...props
}) => {
    return (
        <InputGroup>
            {leftElement && <InputLeftElement children={leftElement} /> }
            <Input 
                type={type || 'text'}
                width={'465px' || width}
                id={id}
                onChange={onChange}
                onClick={onClick}
                placeholder={placeholder || ''}
                _placeholder={{ color: "#828282" }}
                // value={value || ''}
                required={required}
                style={style || {
                    border: "1.89px solid #8692A6",
                    borderRadius: "5px",
                    margin: "8px"
                }}
                {...props}
            />
            {rightElement && <InputRightElement children={rightElement} /> }
        </InputGroup>
    )
}

export default InputField