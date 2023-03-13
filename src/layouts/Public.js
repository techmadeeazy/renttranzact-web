import React, { useState } from 'react'
import { Center, Flex, VStack } from '@chakra-ui/react'

import key3 from '../assets/download3.png'
import "./public.css";

const PublicLayout = ({ children }) => {  
    const [ selected, setSelected ] = useState(0);
    const style =
        selected >= 1 ? { transform: `translateX(-${selected * 300}px)` } : {};

    const renderIndicator = []
    for(let i=0; i<3; i++) {
        renderIndicator.push(
            <li data-value={i} key={i} className={selected === i ? 'active' : ''}></li>
        )
    }

    const handleClick = e => {
        let value = e.target.getAttribute('data-value')
        if (value !== null) {
        //   this.setState({
        //     selected: value
        //   });
            setSelected(value)
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <Flex>
                <div style={{ width: "50%", backgroundColor: "#028F98", paddingTop: "230px"}}>
                    <Center w='100%'>
                        <VStack>
                            <div className="PublicSlider">
                                <div className="PubicSlide-items" style={style}>
                                    <div className="item">
                                        <img src={key3} alt="First slide"/>
                                    </div>
                                    <div className="item">Slide 2</div>
                                    <div className="item">Slide 3</div>
                                </div>
                                {/* <ul className="indicators"></ul> */}

                                
                            </div>
                        </VStack>
                    </Center>

                   <div style={{ padding: "35px 120px 0px 120px" }}>
                        <div className='PublicLayWel'>
                            Welcome!
                        </div>
                        <div className='PublicLaySubWel'>
                            Rent verified properties through <b>Rentranzact</b> with just a few clicks
                        </div>

                        <ul onClick={handleClick} className="indicators">
                                {renderIndicator}
                        </ul>
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
