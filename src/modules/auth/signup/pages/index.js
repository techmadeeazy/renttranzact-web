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
                <MainSignup />
                {/* <VerificationSignupForm /> */}
                {/* <CreateProfileSignup /> */}
                {/* <ContactInfoSignup /> */}
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

            <form style={{ marginTop: "20px" }}>
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
                    placeholder='&nbsp; Profile Type'
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
                    <img src={verifyPic} alt='img' style={{ height: "250px", marginBottom: "30px" }}/>
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


export function SignupHeadSubHead (props) {
    return(
        <div>
            <div className='Signup-header'>{props.header}</div>
            <div style={{ color: "#8692A6", fontSize: "18px", fontWeight: "500", marginBottom: "20px" }}>
               {props.subHead} </div>
        </div>
    )
}



function CreateProfileSignup (){
    return(
        <>
            <SignupHeadSubHead 
                header='Create Profile'
                subHead="Let’s Personlise your search"
            />
            <form>
                <Input 
                    placeholder='Username'
                    width='465px'
                />
                <Select 
                    placeholder='&nbsp; Gender'
                    width='465px'
                    options={[" ", "Male", "Female"]}
                />
                <Input 
                    placeholder='Home Address'
                    width='465px'
                />
                <Select 
                    placeholder='&nbsp; State'
                    width='465px'
                    options={[" ", "State A", "State B"]}
                />
                <Select 
                    placeholder='&nbsp; Local Government Area'
                    width='465px'
                    options={[" ", "Male", "Female"]}
                />
                <Input 
                    placeholder='Website (Optional)'
                    width='465px'
                />
                <Button 
                    text='Continue'
                    width='465px'
                />
            </form>
        </>
    )
}



function ContactInfoSignup (){
    return(
        <>
            <SignupHeadSubHead 
                header='Contact Information'
                subHead="Let’s Personalise your search"
            />
            <form>
                <Input 
                    placeholder='First Name'
                    width='465px'
                />
                <Input 
                    placeholder='Last Name'
                    width='465px'
                />
                <Input 
                    placeholder='Email Address'
                    width='465px'
                />
                <Input 
                    placeholder='Mobile Number'
                    width='465px'
                />
                <Input 
                    placeholder='Whatsapp Number (Optional)'
                    width='465px'
                />
                <Button 
                    text='Continue'
                    width='465px'
                />
            </form>
        </>
    )
}