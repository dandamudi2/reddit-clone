import { PhoneIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup,InputLeftElement } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
    
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex flexGrow={1} mr={2} align="center">
             <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input  fontSize='10pt' placeholder='Search Reddit' 
    _placeholder={{color:"gray.500"}}
    _hover={{
        bg:'white',
        border:'1px solid',
        borderColor:"blue.500",
    }}

    _focus={{
        outline:"none",
        border:"1px solid",
        borderColor:"blue.500"
    }}
    
    />
  </InputGroup>

        </Flex>
    )
}
export default SearchInput;