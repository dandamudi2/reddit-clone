import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input,Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type SignUpProps = {
    
};

const SignUp:React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm,setsignUpForm] = useState({
        email:'',
        password:''
    })

    const onSubmit = () =>{}

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        // update form state

        setsignUpForm(prev =>({
            ...prev,
            [event.target.name]:event.target.value
          })
        );
    }
    
    return (

        <form>
             <Input name="email"
            required
              placeholder='email'
              type="email"
               mb={2}
               fontSize='10pt'
               onChange={onChange}
               _placeholder={{color:"gray.500"}}
               _hover= {{
                bg:"white",
                border:"1px solid",
                borderColor:"blue.500",
               }}
               _focus={{
                outline:'none',
                 bg:"white",
                border:"1px solid",
                borderColor:"blue.500",
               }}
               />
               <Input
              required
              name="password"
              placeholder='password'
               type="password"
               fontSize='10pt'
               onChange={onChange}
               _hover= {{
                bg:"white",
                border:"1px solid",
                borderColor:"blue.500",
               }}
               _focus={{
                outline:'none',
                 bg:"white",
                border:"1px solid",
                borderColor:"blue.500",
               }}
               
               />

          <Input
              required
              name="confirmPassword"
              placeholder='Confirm Password'
               type="password"
               fontSize='10pt'
               onChange={onChange}
               _hover= {{
                bg:"white",
                border:"1px solid",
                borderColor:"blue.500",
               }}
               _focus={{
                outline:'none',
                 bg:"white",
                border:"1px solid",
                borderColor:"blue.500",
               }}
               
               />

               

               <Button width='100%' height="36px" mt={2} mb={2} type="submit">Sign up</Button>

               <Flex fontSize="9pt"   justifyContent='center' >
                <Text mr={1} >Already a redditor? </Text>
                <Text
                 color="blue.500"
                 fontWeight={600}
                 
                 cursor="pointer"
                 onClick={() =>
                    setAuthModalState((prev) => ({
                        ...prev,
                        view:"login"
                    }))
                
                }
                >
                LOG IN
                </Text>
               </Flex>
        </form>
    )
}
export default SignUp;