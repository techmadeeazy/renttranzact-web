import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonField = ({ 
    type,
    onClick,
    text,
    width,
    loading,
    className,
    style,
    disabled,
 }) => {
    return (
        <>
        <Button 
            size='lg'
            onClick={onClick}
            type={type}
            disabled={disabled}
            style={style || {
                backgroundColor: "#028F98",
                color: "#fff",
                borderRadius: "10px",
                width: width,
                margin: "8px"
            }}
        >
            {text}
        </Button>
        </>
    )
}

export default ButtonField