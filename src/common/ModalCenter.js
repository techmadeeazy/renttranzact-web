import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function ModalCenter(props) {
    return (
        <React.Fragment>
            <Modal 
                isOpen={props.isOpen}
                onClose={props.onClose}
                size={props.size ?? 'full'}
                isCentered
            >
                <ModalOverlay />
                <ModalContent w={props.width ?? '80vw'} h={props.height}>
                    <ModalHeader>{props.header}</ModalHeader>
                    {!props.noClose && <ModalCloseButton />}
                    <ModalBody h={props.height} overflow='auto'>{props.body}</ModalBody>
                    <ModalFooter>{props.footer}</ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    )
}
