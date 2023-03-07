import { Box, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import Button from '../../../../common/button/Button'
import InputField from '../../../../common/form/InputField'
// import { BiUser } from 'react-icons/bi'

import './login.css'

function index() {
    return (
        <section className='Login-section'>
            <Box>
                <div className='Login-header'>Log in</div>
                <HStack spacing={10}>
                    <div className='Login-dont-acc'>
                        Don’t have an account?
                    </div>
                    <a href='/' className='Login-create-acc'>Create a account</a>
                </HStack>
                <div className='Login-dont-acc'>It will take less than a minute.</div>


                <form className='Login-form-section'>
                    <InputField 
                        placeholder='Username'
                        // rightElement={(<BiUser />)}
                    />
                    <InputField 
                        placeholder='Password'
                        type='password'
                    />
                    <Button 
                        text='Log In'
                        width='465px'
                    />

                    <Center>
                        <a href='/' className='Login-forgotten-password'>Forget Password?</a>
                    </Center>

                    
                    
                    
                </form>
            </Box>
        </section>
    )
}

export default index