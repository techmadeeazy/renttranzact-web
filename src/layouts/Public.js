import React from 'react'
import { Center, Flex } from '@chakra-ui/react'
import { Carousel } from 'react-bootstrap';

import key3 from '../assets/download3.png'

import "./public.css";

const PublicLayout = ({ children }) => {
    return (
        <div style={{ width: "100%" }}>
            <Flex>
                <div style={{ width: "50%", backgroundColor: "#028F98"}}>
                    <Center w='100%'>
                        <Carousel style={{ width: "60%", marginTop: "40%", }}>
                            <Carousel.Item>
                                <img src={key3} alt="First slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={key3} alt="First slide" />
                            </Carousel.Item>
                        </Carousel> 
                    </Center>

                   <div style={{ padding: "55px 120px 0px 120px" }}>
                        <div className='privateLayWel'>
                            Welcome!
                        </div>
                        <div className='privateLaySubWel'>
                            Rent verified properties through <b>Rentranzact</b> with just a few clicks
                        </div>
                   </div>
                </div>

                {/* Space area for components */}
                <main style={{ width: "50%", height: "100vh" }}>
                    {children}
                </main>

            </Flex> 
        </div>
    )
}

export default React.memo(PublicLayout)