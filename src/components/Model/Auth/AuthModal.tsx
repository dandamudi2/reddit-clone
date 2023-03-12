import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
type AuthModalProps = {
    
};

import {authModalState} from '../../../atoms/authModalAtom';
import { useRecoilState } from 'recoil';

const AuthModal:React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState);

    const handleClose = () =>{
        setModalState((prev) =>({
            ...prev,
            open:false,
        }));
    }
   
    return (
        <>
<Modal isOpen={modalState.open} onClose={handleClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    Here is modal of the body
    </ModalBody>

    
  </ModalContent>
</Modal>
      
        </>
    )
}
export default AuthModal;