import { Button, Flex ,Image } from '@chakra-ui/react';
import React from 'react';

type AuthButtonsProps = {
    
};

const AuthButtons:React.FC<AuthButtonsProps> = () => {
    
    return (
        <Flex direction="column" width="100%" mb={4} >
            <Button variant="oauth" mb={2}>
                <Image  src="/images/googlelogo.png" alt=""  height="20px" mr={4} />
                Continue with Google</Button>
            <Button variant='oauth'>Some Other Provider</Button>
        </Flex>
    )
}
export default AuthButtons;