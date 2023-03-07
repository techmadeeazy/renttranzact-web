import { Box, HStack, Center, VStack } from '@chakra-ui/react'
import Input from '../../../../common/form/InputField'
import Button from '../../../../common/button/Button'
import React from 'react'
import './signup.css'
import Select from '../../../../common/form/Select'
import verifyPic from '../../../../assets/verification-pic.webp'

function index() {
    return (
        <section className='Signup-section'>
            <Box>
                {/* <MainSignup /> */}
                {/* <VerificationSignupForm /> */}
                <CreateProfileSignup />
            </Box>
        </section>
    )
}

export default index







function MainSignup (){
    return(
        <>
            <HStack spacing={10}>
                <div className='Signup-header'>Sign Up</div>
                <div className='Signup-have-acc'>Already have an account?  
                    <a href='/' className='Signup-sign-up'>Log In</a>
                </div>
            </HStack>

            <form style={{ marginTop: "30px" }}>
                <Input 
                    placeholder='Username'
                />
                <Input 
                    placeholder='Email'
                />
                <Input 
                    placeholder='Password'
                />
                <Input 
                    placeholder='Re-type Password'
                />
                <Select 
                    placeholder='Profile Type'
                    width='465px'
                    options={[" ", "Landlord", "Tenant", "Agent"]}
                />
                <Input 
                    placeholder='Referrer ID (Optional)'
                />
                <Button 
                    text='Sign Up'
                    width='465px'
                />
            </form>
        </>
    )
}






function VerificationSignupForm (){
    return(
        <>
            <Center>
                <VStack>
                    <img src={verifyPic} alt='img' style={{ height: "310px", marginBottom: "30px" }}/>
                    <div className='Signup-verify-code'>Verification code has been sent to de*****@gmail.com</div>
                    
                    <form>
                        <Input 
                            placeholder=''
                        />
                        <Button 
                            text='Sign Up'
                            width='465px'
                        />
                    </form>
                   
                   <div className='Signup-verify-code'>Didn’t get the verification code?</div>
                   <a href='/' className='Signup-sign-up'>Resend</a>
                </VStack>
            </Center>        
        </>
    )
}



function CreateProfileSignup (){
    return(
        <>
            <div>
                <div className='Signup-header'>Create Profile</div>
                <div style={{ color: "#8692A6", fontSize: "18px", fontWeight: "500", marginBottom: "30px" }}>
                    Let’s Personlise your search</div>
            </div>
            <form>
                <Input 
                    placeholder='Username'
                />
                <Select 
                    placeholder='Gender'
                    width='465px'
                    options={[" ", "Male", "Female"]}
                />
                <Input 
                    placeholder='Home Address'
                />
                <Select 
                    placeholder='State'
                    width='465px'
                    options={[" ", "Male", "Female"]}
                />
                <Select 
                    placeholder='Local Government Area'
                    width='465px'
                    options={[" ", "Male", "Female"]}
                />
                <Input 
                    placeholder='Website (Optional)'
                />
                <Button 
                    text='Continue'
                    width='465px'
                />
            </form>
        </>
    )
}