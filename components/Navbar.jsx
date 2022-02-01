import React from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout, FcKey } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs'; 
import { FiKey } from 'react-icons/fi';


const Navbar = () => {
    return (
        <Flex p='2' paddingTop='20px' flexDir='column'>
            <Flex >
                <Box fontSize='3xl' color='gray.200' fontWeight='bold'>
                    <Link href='/' paddingLeft='2'>DealState</Link>
                </Box>
                <Spacer/>
                <Box>
                    <Menu >
                        <MenuButton 
                            as={IconButton} 
                            icon={<FcMenu/>} 
                            variant='outline'  
                            background='#363636' 
                            border='none' 
                            _hover={{ background: '#434343' }}
                            _focus={{ background: '#434343' }}
                            _active={{ background: '#434343' }}
                            _after={{ background: '#434343' }}
                            
                        />
                        <MenuList background='#363636' color='white' border='#363636' >
                            <Link href='/' passHref>
                                <MenuItem 
                                    _hover={{ background: '#434343' }}
                                    _focus={{ background: '#434343' }}
                                    _active={{ background: '#434343' }}
                                    _after={{ background: '#434343' }} 
                                    icon={<FcHome />}
                                >
                                        Home
                                </MenuItem>
                            </Link>
                            <Link href='/search' passHref>
                                <MenuItem 
                                    _hover={{ background: '#434343' }}
                                    _focus={{ background: '#434343' }}
                                    _active={{ background: '#434343' }}
                                    _after={{ background: '#434343' }}  
                                    icon={<BsSearch />}
                                >
                                    Search
                                </MenuItem>
                            </Link>
                            <Link href='/search?purpose=for-sale' passHref>
                                <MenuItem 
                                    _hover={{ background: '#434343' }}
                                    _focus={{ background: '#434343' }}
                                    _active={{ background: '#434343' }}
                                    _after={{ background: '#434343' }}   
                                    icon={<FcAbout />}
                                >
                                    Buy Property
                                </MenuItem>
                            </Link>
                            <Link href='/search?purpose=for-rent' passHref>
                                <MenuItem 
                                    _hover={{ background: '#434343' }}
                                    _focus={{ background: '#434343' }}
                                    _active={{ background: '#434343' }}
                                    _after={{ background: '#434343' }}   
                                    icon={<FcKey />}
                                >
                                    Rent Property
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Box marginTop='20px' height='1px' background='gray.100' w='92vw' alignSelf='center' borderRadius='10px' ></Box>
        </Flex>
    )
}

export default Navbar;



